class Api::V1::CharactersController < Api::V1::BaseController
  def index
    characters = Character.all
    characters_with_img_URL = []
    characters.each do |character|
      character_data = {
        id: character.id,
        name: character.name,
        stats: character.stats,
        description: character.description,
        user_id: character.user_id,
        image_url: nil
      }

      character_data[:image_url] = (url_for(character.image) if character.image.persisted?)
      characters_with_img_URL.push(character_data)
    end
    respond_to do |format|
      format.json { render json: characters_with_img_URL }
      format.export { send_data(characters.to_json, filename: 'characters.export') }
    end
  end

  def import
    respond_to do |format|
      format.all do
        imported_file_data = params[:character_data_file].read
        data_hash = JSON.parse(imported_file_data)
        data_hash.each do |character_data|
          character_data = character_data.except('id', 'user_id')
          character_data[:user_id] = current_user.id

          Character.create(character_data)
        end
        redirect_to characters_url, notice: 'Character import finalized'
      end
    end
  end

  def create
    respond_with :api, :v1, Character.create(character_params)
  end

  def destroy
    respond_with Character.destroy(params[:id])
  end

  def update
    character = Character.find(params[:id])
    character.update(character_params)
    render json: character
  end

  def show
    character = Character.find(params[:id])
    render json: character
  end

  private

  def character_params
    params.require(:character).permit(:id, :name, :user_id, :image, :stats, :description)
  end
end
