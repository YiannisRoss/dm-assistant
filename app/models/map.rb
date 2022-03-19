# frozen_string_literal: true

class Map < ApplicationRecord
  belongs_to :user
  has_one_attached :image
end
