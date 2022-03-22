# frozen_string_literal: true

class GameTrackerController < ApplicationController
  def index
    @characters = Character.all
    @maps = Map.all
  end
end
