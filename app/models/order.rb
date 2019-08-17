class Order < ApplicationRecord
    has_many :furnitures_order
    has_many :furniture, through: :furnitures_order
    belongs_to :user
end
