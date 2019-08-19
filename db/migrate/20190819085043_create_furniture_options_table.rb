class CreateFurnitureOptionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :furniture_options do |t|
        t.text :capacity
        t.text :color
        t.references :furniture
        t.text :image
        t.float :price
        t.float :width
        t.float :height
        t.float :length
        t.timestamps
    end
  end
end
