class CreateFurnitures < ActiveRecord::Migration[5.2]
  def change
    create_table :furnitures do |t|
        t.text :name
        t.float :price
        t.text :category
        t.text :img_url
        t.timestamps
    end
  end
end
