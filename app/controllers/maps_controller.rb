class MapsController < ApplicationController


    def index
        @maps = current_user.maps

    end

    def new
        @map = Map.new()

    end

    def create
        
        @map = Map.new(map_params)
        
        respond_to do |format|
            if @map.save
              format.html { redirect_to root_path, notice: "map was successfully saved." }
              format.json { render :show, status: :created, location: @map }
            else
                format.html { redirect_to root_path,  alert: "map failed, #{@map.errors.full_messages.first}" , status: :unprocessable_entity }
                format.json { render json: @map.errors, status: :unprocessable_entity }
            end
          end


    end

end
