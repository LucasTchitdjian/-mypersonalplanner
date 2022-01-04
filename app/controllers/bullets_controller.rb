class BulletsController < ApplicationController
  def index
    if params["query"].present?
      @bullets = Bullet.search_by_content(params["query"])
    else
      @bullets = Bullet.all
    end

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
    end
  end

  def create

  end

  def update

  end

  def destroy

  end

end
