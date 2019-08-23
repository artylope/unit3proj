class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
        t.references :user
        t.float :total_price
        t.text :recipient_name
        t.text :recipient_contact
        t.text :recipient_address
        t.text :delivery_day
        t.text :delivery_time
        t.text :recipient_note
        t.timestamps
    end
  end
end
