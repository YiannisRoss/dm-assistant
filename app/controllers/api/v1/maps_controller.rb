class Api::V1::MapsController < Api::V1::BaseController
  def index
    maps = Map.all.where(user_id: current_user.id)
    maps_with_img_URL = []
    maps.each do |map|
      map_data = {
        id: map.id,
        name: map.title,
        user_id: map.user_id,
        image_url: nil
      }

      map_data[:image_url] = (url_for(map.image) if map.image.persisted?)
      maps_with_img_URL.push(map_data)
    end
    respond_to do |format|
      format.json { render json: maps_with_img_URL }
      # format.export { send_data(maps.to_json, filename: 'maps.export') }
    end
  end

  def import
    respond_to do |format|
      format.all do
        imported_file_data = params[:map_data_file].read
        data_hash = JSON.parse(imported_file_data)
        data_hash.each do |map_data|
          map_data = map_data.except('id', 'user_id')
          map_data[:user_id] = current_user.id

          Map.create(map_data)
        end
        redirect_to maps_url, notice: 'map import finalized'
      end
    end
  end

  def create
    respond_with :api, :v1, Map.create(map_params)
  end

  def destroy
    respond_with Map.destroy(params[:id])
  end

  def update
    map = Map.find(params[:id])
    map.update(map_params)
    render json: map
  end

  def show
    map = Map.find(params[:id])
    render json: map
  end

  private

  def map_params
    params.require(:map).permit(:id, :title, :user_id, :image)
  end
end
