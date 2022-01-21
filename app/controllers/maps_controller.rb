class MapsController < ApplicationController


    def index
        @maps = current_user.maps

    end
end
