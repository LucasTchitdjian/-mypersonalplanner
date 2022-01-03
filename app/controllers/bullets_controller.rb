class BulletsController < ApplicationController
  def index
    if params["query"].present?
      @bullets = Bullet.search_by_content(params["query"])
    else
      @bullets = Bullet.all
    end
  end

  def create

  end

  def update

  end

  def destroy

  end

end
