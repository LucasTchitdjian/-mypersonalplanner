class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @new_event = Event.new
    params[:day_start] ? @date = params[:day_start] : @date = Date.current.to_date
    @events = Event.where(day_start: @date)
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    # @event.start_date = Date.current.to_date
    if @event.bullet_id
      @bullet = Bullet.find(@event.bullet_id)
      @bullet.status = "planned"
      @bullet.save!
    end
    @event.save!
    respond_to do |format|
      format.html
      format.json {
        render json: @event
      }
    end
    # if @event.save
    #   redirect_to root_path
    # else
    #   render 'index'
    # end
  end

  def update
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    respond_to do |format|
      format.html # { redirect_to root_path, notice: "Destroyed !" }
      format.json # { head :no_content }
    end
  end

  private

  def event_params
    params.permit(:title, :bullet_id, :day_start, :day_end, :hour_start, :hour_end)
  end
end
