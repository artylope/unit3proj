class Order < ApplicationRecord
    has_many :furnitures_order
    has_many :furniture_option, through: :furnitures_order
    belongs_to :user
end
