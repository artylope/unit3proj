# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Furniture.create(
    :name => 'Lidhult', :price => 1359.00, :category => 'Sofa', :img_url => 'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m')
Furniture.create(
    :name => 'Vimle', :price => 830.00, :category => 'Sofa', :img_url => 'https://www.ikea.com/PIAimages/0725527_PE734920_S5.JPG?f=l')
Furniture.create(
    :name => 'Havsta', :price => 490.00, :category => 'Cabinet', :img_url => 'https://www.ikea.com/PIAimages/0675394_PE718310_S5.JPG?f=l')
Furniture.create(
    :name => 'Seppo', :price => 69.00, :category => 'Lighting', :img_url => 'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/5/7/a/5/57a5d2a7192cee997f6c2d9ce8b07f35f9349b99_CLPSEP011WHT_UK_Seppo_Ceiling_Bar_White_LB01_ctr.jpg')
Furniture.create(
    :name => 'Roscoe', :price => 399.00, :category => 'Bed', :img_url => 'https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,f_auto,w_265,dpr_1.0,q_auto:best/v4/catalog/product/catalog/a/7/5/9/a759a58dcbf37c72cb0c0a4ba630c8c5275e61ee_BEDROS008BLU_UK_Roscoe_Super_Kingsize_Bed_Aegean_Blue_PL.jpg')



FurnitureOption.create(:capacity => "2-seater", :color => "Beige", :furniture_id => 1, :image =>'https://www.ikea.com/PIAimages/0619145_PE688945_S5.JPG?f=m',:price => 1359.00, :width => 208.00, :height => 102, :length => 200)
FurnitureOption.create(:capacity => "3-seater", :color => "Beige", :furniture_id => 1, :image =>'https://www.ikea.com/PIAimages/0620132_PE689443_S5.JPG?f=m',:price => 2059.00, :width => 208.00, :height => 102, :length => 300)
FurnitureOption.create(:capacity => "2-seater", :color => "Blue", :furniture_id => 1, :image =>'https://www.ikea.com/PIAimages/0619131_PE688941_S5.JPG?f=m',:price => 1359.00, :width => 208.00, :height => 102, :length => 200)
FurnitureOption.create(:capacity => "3-seater", :color => "Blue", :furniture_id => 1, :image =>'https://www.ikea.com/PIAimages/0620129_PE689440_S5.JPG?f=m',:price => 2059.00, :width => 208.00, :height => 102, :length => 300)

FurnitureOption.create(:capacity => "3-seater", :color => "Dalstorp multicolor", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0725527_PE734920_S5.JPG?f=l',:price => 830.00, :width => 241.00, :height => 83, :length => 211)
FurnitureOption.create(:capacity => "3-seater", :color => "Farsta dark brown", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0514392_PE639462_S5.JPG?f=l',:price => 880.00, :width => 241.00, :height => 83, :length => 300)
FurnitureOption.create(:capacity => "3-seater", :color => "Gunnared medium grey", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0514368_PE639441_S5.JPG?f=l',:price => 850.00, :width => 241.00, :height => 83, :length => 200)
FurnitureOption.create(:capacity => "4-seater", :color => "Dalstorp multicolor", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0766712_PE753877_S5.JPG?f=l',:price => 1750.00, :width => 235.00, :height => 83, :length => 300)
FurnitureOption.create(:capacity => "4-seater", :color => "Farsta dark brown", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0579268_PE675219_S5.JPG?f=l',:price => 1750.00, :width => 235.00, :height => 83, :length => 300)
FurnitureOption.create(:capacity => "4-seater", :color => "Gunnared medium grey", :furniture_id => 2, :image =>'https://www.ikea.com/PIAimages/0579267_PE675221_S5.JPG?f=l',:price => 1830.00, :width => 235.00, :height => 83, :length => 300)
FurnitureOption.create(:kuan => "with doors", :color => "White", :furniture_id => 3, :image =>'https://www.ikea.com/PIAimages/0675394_PE718310_S5.JPG?f=l',:price => 490.00, :width => 47.00, :height => 212.00, :length => 81.00)
FurnitureOption.create(:kuan => "with doors", :color => "Dark Brown", :furniture_id => 3, :image =>'https://www.ikea.com/PIAimages/0626912_PE693102_S5.JPG?f=l',:price => 490.00, :width => 47.00, :height => 212.00, :length => 81.00)
FurnitureOption.create(:kuan => "w glass-doors", :color => "White", :furniture_id => 3, :image =>'https://www.ikea.com/PIAimages/0675391_PE718312_S5.JPG?f=l',:price => 510.00, :width => 47.00, :height => 212.00, :length => 81.00)
FurnitureOption.create(:kuan => "w glass-doors", :color => "Dark Brown", :furniture_id => 3, :image =>'https://www.ikea.com/PIAimages/0626909_PE693101_S5.JPG?f=xxxl',:price => 510.00, :width => 47.00, :height => 212.00, :length => 81.00)
FurnitureOption.create(:color => "White", :furniture_id => 4, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/5/7/a/5/57a5d2a7192cee997f6c2d9ce8b07f35f9349b99_CLPSEP011WHT_UK_Seppo_Ceiling_Bar_White_LB01_ctr.jpg',:price => 69.00, :width => 10.00, :height => 22.00, :length => 75.00)
FurnitureOption.create(:color => "Black", :furniture_id => 4, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/5/f/6/9/5f69b97d8ce04ba6880f54280d931fe5d92d8fea_CLPSEP002BLK_UK_Seppo_Ceiling_Light_LB01.jpg',:price => 69.00, :width => 10.00, :height => 22.00, :length => 75.00)
FurnitureOption.create(:color => "Grey", :furniture_id => 4, :image =>'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/7/b/0/a/7b0ae58e765fd529dadefd3b29a4acf81a6d0d15_CLPSEP012GRY_UK_Seppo_Ceiling_Bar_Grey_LB01_ctr.jpg',:price => 69.00, :width => 10.00, :height => 22.00, :length => 75.00)
FurnitureOption.create(:capacity => "UK Double", :type => "without drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/a/c/c/e/accedba3a78e30881c9e4a01ac6e6fcd592e375b_BEDROS001BLU_UK_Roscoe_double_bed_Aegen_Blue_LB01.jpg',:price => 399.00, :width => 155.00, :height => 114.00, :length => 205.00)
FurnitureOption.create(:capacity => "UK Double", :type => "2 drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/e/6/7/4e6796761d2a10bd533433c52871202eaefefa2f_Roscoe_Bed_With_Storage_Drawers_Aegean_blue_LB01.jpg',:price => 599.00, :width => 155.00, :height => 114.00, :length => 205.00)
FurnitureOption.create(:capacity => "Super King Size", :type => "without drawers",:furniture_id => 5, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/2/0/0/3/2003c7aca991ee54c22120eb8c28acdf7b9563e7_BEDROS008BLU_UK_Roscoe_Super_Kingsize_Bed_Aegean_Blue_LB01.jpg',:price => 499.00, :width => 202.00, :height => 114.00, :length => 215.00)
FurnitureOption.create(:capacity => "Super King Size", :type => "2 drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/e/6/7/4e6796761d2a10bd533433c52871202eaefefa2f_Roscoe_Bed_With_Storage_Drawers_Aegean_blue_LB01.jpg',:price => 599.00, :width => 202.00, :height => 114.00, :length => 215.00)


MainCategory.create(:title =>"Furnitures")#1
MainCategory.create(:title =>"Accessories")#2
MainCategory.create(:title =>"Bath Room")#3
MainCategory.create(:title =>"Bed Room")#4
MainCategory.create(:title =>"Dining Room")#5
MainCategory.create(:title =>"Kitchen")#6
MainCategory.create(:title =>"Living Room")#7
MainCategory.create(:title =>"Study")#8

FurnituresMainCategory.create(:furniture_id => 1, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 1, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 2, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 2, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 3, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 3, :main_category_id => 5)
FurnituresMainCategory.create(:furniture_id => 3, :main_category_id => 6)
FurnituresMainCategory.create(:furniture_id => 3, :main_category_id => 8)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 2)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 4)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 5)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 6)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 4, :main_category_id => 8)
FurnituresMainCategory.create(:furniture_id => 5, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 5, :main_category_id => 4)
