class CreateMainCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :main_categories do |t|
        t.text :title
        t.timestamps
    end
  end
end
