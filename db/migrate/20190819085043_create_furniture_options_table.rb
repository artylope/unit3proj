class CreateFurnitureOptionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :furniture_options do |t|
        t.text :capacity
        t.text :color
        t.text :color_code
        t.text :material
        t.text :material_img
        t.text :kuan
        t.references :furniture
        t.text :image
        t.float :price
        t.float :width
        t.float :height
        t.float :length
        t.text :stripe_id
        t.timestamps
    end
  end
end
