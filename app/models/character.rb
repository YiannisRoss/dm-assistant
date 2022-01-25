class Character < ApplicationRecord


    serialize :stats
    has_one_attached :image

    belongs_to :user
end
