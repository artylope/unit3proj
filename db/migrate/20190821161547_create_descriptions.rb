class CreateDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :descriptions do |t|
        t.references :furniture_option
        t.text :short
        t.text :long
        t.timestamps
    end
  end
end
