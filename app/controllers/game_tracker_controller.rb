# frozen_string_literal: true

class GameTrackerController < ApplicationController

  layout "game_tracker"
  def index
    @characters = Character.all
    # @characters.each do |character|
    #   character.image_url = url_for(character.image)
    # end
    @maps = Map.all
  end
end
