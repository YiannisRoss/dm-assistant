class Api::V1::CharactersController < Api::V1::BaseController 

  def index
    respond_with Character.all
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

    respond_with character, json: character
  end

  private

  def character_params
    params.require(:character).permit(:id, :name, :user_id, :image, :stats, :description)
  end
end
