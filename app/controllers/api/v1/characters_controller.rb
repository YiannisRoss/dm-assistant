class Api::V1::CharactersController < Api::V1::BaseController 

  def index
    respond_to do |format|
      format.json  { render :json =>  Character.all }
      format.export { send_data(Character.all.to_json, filename: 'characters.export') }
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

    
  def export
    respond_with :api, :v1, export_user_characters
end

  private
  def export_characters
      user = current_user
      user_character_data = serialize(user.characters, JSON)
      
      send_data(user_character_data, filename: 'testfile.boind') 
      
  end

  def character_params
    params.require(:character).permit(:id, :name, :user_id, :image, :stats, :description)
  end
end
