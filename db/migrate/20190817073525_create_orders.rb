class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
        t.references :user
        t.float :total_price
        t.timestamps
    end
  end
end
