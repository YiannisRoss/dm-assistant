class Character < ApplicationRecord


    serialize :stats

    belongs_to :user
end
