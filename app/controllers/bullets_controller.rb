class BulletsController < ApplicationController
  before_action :set_user

  def index
    @new_bullet = Bullet.new
    if params["query"].present?
      @bullets = Bullet.search_by_content(params["query"])
    else
      @bullets = Bullet.all.order(id: :asc)
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
      redirect_to root_path
    else
      render 'index'
    end
  end

  def update
    @bullet = Bullet.find(params[:id])
    @bullet.update(bullet_params)
  end

  def destroy
  end

private

  def bullet_params
    params.permit(:content, :person)
  end

  def set_user
    @user = User.find(current_user[:id])
  end

end
