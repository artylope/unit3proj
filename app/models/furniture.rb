class Furniture < ApplicationRecord
    has_many :cart
    has_many :furnitures_order
    has_many :order, through: :furnitures_order

end
