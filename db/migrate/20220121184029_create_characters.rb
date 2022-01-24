class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string   :name,          null: false
      t.string   :description          
      #Add stats.
      #   String to decode? 101508181817 could be STR 10 DEX 15 CON 08 INT 18 WIS 18 CHA 17
      #   Individual columns? Would work with Character.strength => 10
      #   Add hash? serialize

      t.timestamps
    end

    add_column :characters, :stats, :text
  end
end
