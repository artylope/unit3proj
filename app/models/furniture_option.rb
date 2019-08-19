class FurnitureOption < ApplicationRecord
    belongs_to :furniture
    has_many :furnitures_order
    has_many :order, through: :furnitures_order
    has_many :cart
end
