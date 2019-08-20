class MainCategory < ApplicationRecord

    has_many :furnitures_main_category
    has_many :furniture, through: :furnitures_main_category
end
