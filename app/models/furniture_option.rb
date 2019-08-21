class FurnitureOption < ApplicationRecord
    belongs_to :furniture
    has_many :furnitures_order
    has_many :order, through: :furnitures_order
    has_many :cart
    has_many :furniture_image
    has_many :description
end
