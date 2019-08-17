class Order < ApplicationRecord
    has_many :furnitures, through: :furnitures_orders
    belongs_to :user
end
