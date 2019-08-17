class Furniture < ApplicationRecord
    has_many :cart
    has_many :order, through: :furnitures_orders
end
