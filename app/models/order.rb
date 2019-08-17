class Order < ApplicationRecord
    has_and_belongs_to_many :furnitures
    belongs_to :user
end
