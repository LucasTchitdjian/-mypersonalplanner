class MentionsController < ApplicationController
  def index
    @people = current_user.bullets.pluck(:person).compact

    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.json
      # format.json { render json: @people }
    end
  end
end
