class Wishlist < ApplicationRecord
    belongs_to :user
    belongs_to :furniture_option
end
