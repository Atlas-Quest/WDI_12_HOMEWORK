class HouseController < ApplicationController::Base

  def index
    @houses = Houses.all
  end

  def show
    @houses = Houses.all
  end

end
