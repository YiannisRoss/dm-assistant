class Character < ApplicationRecord


    serialize :stats
    belongs_to :user

    has_one_attached :image

end
