class FurnituresMainCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :furnitures_main_categories do |t|
        t.references :furniture
        t.references :main_category
        t.timestamps
    end
  end
end
