# frozen_string_literal: true

class Character < ApplicationRecord
  serialize :stats
  belongs_to :user

  validates :name, presence: true
  has_one_attached :image
end
