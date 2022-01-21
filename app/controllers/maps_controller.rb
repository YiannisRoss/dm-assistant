class MapsController < ApplicationController


    def index
        @maps = current_user.maps

    end

    def new
        @user = current_user

        @map = Map.new()
    end

    def edit

        @map = Map.find(params[:id])

    end

    def show

        @map = Map.find(params[:id])
        
    end

    def create
        
        @map = Map.new(map_params)
        
        respond_to do |format|
            if @map.save
              format.html { redirect_to maps_path, notice: "map was successfully saved." }
              format.json { render :show, status: :created, location: @map }
            else
                format.html { redirect_to maps_path,  alert: "map failed, #{@map.errors.full_messages.first}" , status: :unprocessable_entity }
                format.json { render json: @map.errors, status: :unprocessable_entity }
            end
          end


    end


    def map_params
        
        params.require(:map).permit(:title, :user_id, :image)
        
    end

end
