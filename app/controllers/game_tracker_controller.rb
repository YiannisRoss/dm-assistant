class GameTrackerController < ApplicationController
  def index
    @characters = Character.all
    @maps = Map.all
  end
end
