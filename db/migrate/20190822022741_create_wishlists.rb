class CreateWishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.references :furniture_option
      t.references :user
      t.timestamps
    end
  end
end
