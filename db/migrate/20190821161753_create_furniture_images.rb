class CreateFurnitureImages < ActiveRecord::Migration[5.2]
  def change
    create_table :furniture_images do |t|
        t.references :furniture_option
        t.text :image
        t.timestamps
    end
  end
end
