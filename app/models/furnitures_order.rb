class FurnituresOrder < ApplicationRecord
    belongs_to :furniture_option
    belongs_to :order
end
