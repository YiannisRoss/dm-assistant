class CharactersController < ApplicationController

    def new
        @character = Character.new
        
    end

    def index
        @characters = current_user.characters
    end
    def create
        @character = Character.new
        @character.stats = {
            :strength => 0,
            :dexterity => 0,
            :constitution => 0,
            :intelligence => 0,
            :wisdom => 0,
            :charisma => 0
            
            
            
            
            
            }
        @character.save
    end
end
