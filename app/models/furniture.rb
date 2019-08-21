class Furniture < ApplicationRecord


    has_many :furniture_option
    has_many :furnitures_main_category
    has_many :main_category,through: :furnitures_main_category


end
