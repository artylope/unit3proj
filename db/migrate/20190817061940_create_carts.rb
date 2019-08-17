class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
        t.references :furniture
        t.references :user
        t.integer :quantity
        t.timestamps
    end
  end
end
