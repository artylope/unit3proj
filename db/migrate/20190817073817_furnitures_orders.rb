class FurnituresOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :furnitures_orders do |t|
        t.references :order
        t.references :furniture_option
        t.integer :quantity
        t.timestamps
    end
  end
end
