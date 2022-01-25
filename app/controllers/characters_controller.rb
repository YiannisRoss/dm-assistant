class CharactersController < ApplicationController

    def new
        @character = Character.new
        @user = current_user

    end

    def index
        @user = current_user
        @characters = current_user.characters
    end
    def create
        @user = current_user
       
        @character = Character.new(character_params)
        

            respond_to do |format|
                if @character.save
                  format.html { redirect_to characters_path, notice: "character was successfully saved." }
                  format.json { render :show, status: :created, location: @character }
                else
                    format.html { redirect_to characters_path,  alert: "character failed, #{@character.errors.full_messages.first}" , status: :unprocessable_entity }
                    format.json { render json: @character.errors, status: :unprocessable_entity }
                end
              end  

    end

    def character_params
        
        params.require(:character).permit( :name, :user_id, :image, :stats )
        
    end

end
