# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Furniture.destroy_all
Furniture.create(
  :name => 'Argos Home Tammy', :price => 100.49, :category => 'Sofa', :img_url => 'https://media.4rgos.it/i/Argos/9182723_R_Z001A?w=750&h=440&qlt=70'
)
Furniture.create(
  :name => 'Roxxane Sofa', :price => 79.69, :category => 'Sofa', :img_url => 'http://cdn.shopify.com/s/files/1/2660/5106/products/gvlzogz8lvl8qdfqdfgj_d8e97acc-4cf2-4d8c-9eda-b3fc3decb58e_800x.jpg?v=1535301597'
)
Furniture.create(
  :name => 'Rivet Sloanne', :price => 150.71, :category => 'Sofa', :img_url => 'http://cdn.shopify.com/s/files/1/1935/8089/products/Sofa_MeridianBlue_Maple_860x520_43ebd4d9-5731-4c0e-bf9d-3a989868e997_1024x1024.jpg?v=1549467303'
)

Furniture.create(
    :name => 'Lidhult', :price => 1359.00, :category => 'Sofa', :img_url => 'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m')
FurnitureOption.destroy_all
FurnitureOption.create(:capacity => "2-seater", :color => "Beige", :furniture_id => 4, :image =>'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m',:price => 100.00, :width => 208.00, :height => 102, :length => 200)
FurnitureOption.create(:capacity => "3-seater", :color => "Beige", :furniture_id => 4, :image =>'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m',:price => 130.00, :width => 208.00, :height => 102, :length => 300)
FurnitureOption.create(:capacity => "2-seater", :color => "Blue", :furniture_id => 4, :image =>'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m',:price => 105.00, :width => 208.00, :height => 102, :length => 200)
FurnitureOption.create(:capacity => "3-seater", :color => "Blue", :furniture_id => 4, :image =>'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m',:price => 150.00, :width => 208.00, :height => 102, :length => 300)