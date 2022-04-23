# frozen_string_literal: true

class GameTrackerController < ApplicationController
  layout 'game_tracker'
  def index
    @characters = Character.all
    @characters_with_img_URL = []
    @characters.each do |character|
      character_data = {
        id: character.id,
        name: character.name,
        stats: character.stats,
        description: character.description,
        user_id: character.user_id,
        image_url: nil
      }

      character_data[:image_url] = (url_for(character.image) if character.image.persisted?)
      @characters_with_img_URL.push(character_data)
    end

    @maps = Map.all
  end
end
