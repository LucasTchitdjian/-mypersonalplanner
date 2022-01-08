class BulletsController < ApplicationController
  before_action :set_user
  skip_before_action :verify_authenticity_token

  def index
    @new_bullet = Bullet.new
    @date = Date.current.to_date
    @events = Event.all
    @new_event = Event.new
    if params["query"].present?
      @bullets = current_user.bullets.search_by_content(params["query"])
    else
      @bullets = current_user.bullets.where(status: [nil, ""]).order(id: :asc)
    end
    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'bullets/bullets', locals: { bullets: @bullets }, formats: [:html] }
    end
  end

  def create
    @bullet = Bullet.new(bullet_params)
    @bullet.user = @user
    if @bullet.save
      redirect_to root_path(anchor: "bullet-#{@bullet.id}")
    else
      render 'index'
    end
  end

  def update
    @bullet = Bullet.find(params[:id])
    @bullet.update(bullet_params)
  end

  def destroy
    @bullet = Bullet.find(params[:id])
    @bullet.destroy
    respond_to do |format|
      format.html # { redirect_to root_path, notice: "Destroyed !" }
      format.json # { head :no_content }
    end
  end

private

  def bullet_params
    params.permit(:content, :person)
  end

  def set_user
    @user = User.find(current_user[:id])
  end

end
