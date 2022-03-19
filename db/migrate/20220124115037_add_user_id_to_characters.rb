# frozen_string_literal: true

class AddUserIdToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_reference :characters, :user, null: false, foreign_key: true
  end
end
