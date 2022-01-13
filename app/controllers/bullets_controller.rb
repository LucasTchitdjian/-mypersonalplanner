class BulletsController < ApplicationController
  before_action :set_user
  skip_before_action :verify_authenticity_token

  def index
    @new_bullet = Bullet.new
    @date = Date.current.to_date
    # @events = cuEvent.where(day_start: @date)
    @events = current_user.events.where(day_start: @date).order(id: :asc)
    @new_event = Event.new
    if params["query"].present?
      @bullets = current_user.bullets.where(status: [nil, ""]).search_by_content(params["query"])
    else
      @bullets = current_user.bullets.where(status: [nil, ""]).order(id: :asc)
    end
    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'bullets/bullets', locals: { bullets: @bullets }, formats: [:html] }
    end
  end

  def events
    date = params["query"].gsub("date_start:", "")
    @events = current_user.events.where(day_start: date).order(id: :asc)
    # @events = Event.all
    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'events/events', locals: { events: @events }, formats: [:html] }
    end
  end

  def create
    @bullet = Bullet.new(bullet_params)
    @bullet.user = @user
    if @bullet.save
      # redirect_to root_path(anchor: "bullet-#{@bullet.id}")
      redirect_to root_path
    else
      render 'index'
    end
    # respond_to do |format|
    #   format.html
    #   format.json
    # end
  end

  def update
    @bullet = Bullet.find(params[:id])
    @bullet.update(bullet_params)
    respond_to do |format|
      format.json { render json: @bullet }
      format.html
      format.text
    end
  end

  def destroy
    @bullet = Bullet.find(params[:id])
    @bullet.destroy
    respond_to do |format|
      format.html # { redirect_to root_path, notice: "Destroyed !" }
      format.json # { head :no_content }
    end
  end

  def bullets_of_others
    @bullets = current_user.bullets.where(status: "Delegated")
    @events = current_user.events.where(day_start: @date).order(id: :asc)
    respond_to do |format|
      format.html { render 'bullets/index', locals: { bullets: @bullets, events: @events }, formats: [:html] }
      format.text { render partial: 'bullets/bullets', locals: { bullets: @bullets }, formats: [:html] }
    end
  end

  def list_people
  @people = current_user.bullets.pluck(:person).compact
  respond_to do |format|
    format.html { render json: @people }
    format.json { render json: @people }
    end
  end

private

  def bullet_params
    params.permit(:content, :person, :status, :id, :event)
  end

  def set_user
    @user = User.find(current_user[:id])
  end

end
