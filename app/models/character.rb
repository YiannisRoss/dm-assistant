# frozen_string_literal: true

class Character < ApplicationRecord
  serialize :stats
  belongs_to :user

  validates :name, presence: true
  has_one_attached :image

  before_save :default_values

  private

  def default_values
    self.description = 'No description yet' if description.empty?
    if stats.empty?
      self.stats = "STR: #{rand(3..8) + rand(6) + rand(6)}
DEX: #{rand(3..8) + rand(6) + rand(6)}
CON: #{rand(3..8) + rand(6) + rand(6)}
INT: #{rand(3..8) + rand(6) + rand(6)}
WIS: #{rand(3..8) + rand(6) + rand(6)}
CHA: #{rand(3..8) + rand(6) + rand(6)}"
    end
  end
end
