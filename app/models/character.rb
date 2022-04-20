# frozen_string_literal: true

class Character < ApplicationRecord
  serialize :stats
  belongs_to :user

  validates :name, presence: true
  has_one_attached :image

  before_save :default_values

  private
  def default_values
      self.description = 'No description yet' if self.description.empty?
      if self.stats.empty?
        self.stats = "STR: #{3+rand(6) + rand(6) + rand(6)}
DEX: #{3+rand(6) + rand(6) + rand(6)}
CON: #{3+rand(6) + rand(6) + rand(6)}
INT: #{3+rand(6) + rand(6) + rand(6)}
WIS: #{3+rand(6) + rand(6) + rand(6)}
CHA: #{3+rand(6) + rand(6) + rand(6)}" 
      end
  end

end
