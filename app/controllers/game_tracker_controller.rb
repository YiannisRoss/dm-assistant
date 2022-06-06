# frozen_string_literal: true

class GameTrackerController < ApplicationController
  layout 'game_tracker'
  def index
    unless current_user
      return
    end
    @characters = Character.all.where(user_id: current_user.id)
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

    @maps = Map.all.where(user_id: current_user.id)
    @maps_with_img_URL = []
    @maps.each do |map|
      map_data = {
        id: map.id,
        title: map.title,
        user_id: map.user_id,
        image_url: nil
      }

      map_data[:image_url] = (url_for(map.image) if map.image.persisted?)
      @maps_with_img_URL.push(map_data)
    end
  end
end
