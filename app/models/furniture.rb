class Furniture < ApplicationRecord
    has_many :cart
    has_and_belongs_to_many :orders
end
