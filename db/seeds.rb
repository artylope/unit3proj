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
Furniture.create(
    :name => 'Lule', :price => 279.00, :category => 'Chair', :img_url => 'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/a/0/0/b/a00bf5ff56192470aa87ddd1a5c743e744ddae20_CHALLE025GRE_UK_Setof2_Lule_High_Back_Carver_Dining_Chairs_Pine_Green_velvet_Oak_LB01.jpg')
Furniture.create(
    :name => 'Lomond', :price => 599.00, :category => 'Table', :img_url => 'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/6/8/3/e/683e8e8bb0f0f17ab7c2a0ed341dd5f3570e3857_SETLOM032GRY_UK_Lomond_Dining_table_bench_set_Grey_wash_and_Black_LB01.jpg')
Furniture.create(
    :name => 'Julius', :price => 29.00, :category => 'Cushion', :img_url => 'https://res-4.cloudinary.com/made-com/image/upload/b_auto,c_pad,h_550,w_2100/c_crop,g_auto,h_550,w_1050,d_made.svg,dpr_1.0,q_auto:best,f_auto/v4/catalog/product/asset/d/a/d/4/dad446943eca358d443a9dceeefa41c1f91e39af_CUSJUL005BLU_UK_Julius_Setof2_Velvet_Cushions_45x45cm_Ink_Blue_LB01.jpg')
Furniture.create(
    :name => 'Jago', :price => 199.00, :category => 'Rug', :img_url => 'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/2/2/c/a/22caf895a7a02d7ecc463d24f9ce3200d8222bb8_RUGJAG018BLU_UK_Jago_Rug_200cm_diam_Teal_LB01.jpg')
Furniture.create(
    :name => 'Lilo', :price => 18.00, :category => 'Decor', :img_url => 'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/d/9/8/4/d98428cfb9c594e33a7fcecfa9c52c173b2c05e1_BTALIL005ZBR_UK_Lilo_Soap_Dispenser_Tumbler_Set_Brushed_Brass_LB01.jpg')




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
FurnitureOption.create(:capacity => "UK Double", :kuan => "without drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/a/c/c/e/accedba3a78e30881c9e4a01ac6e6fcd592e375b_BEDROS001BLU_UK_Roscoe_double_bed_Aegen_Blue_LB01.jpg',:price => 399.00, :width => 155.00, :height => 114.00, :length => 205.00)
FurnitureOption.create(:capacity => "UK Double", :kuan => "2 drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/e/6/7/4e6796761d2a10bd533433c52871202eaefefa2f_Roscoe_Bed_With_Storage_Drawers_Aegean_blue_LB01.jpg',:price => 599.00, :width => 155.00, :height => 114.00, :length => 205.00)
FurnitureOption.create(:capacity => "Super King Size", :kuan => "without drawers",:furniture_id => 5, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/2/0/0/3/2003c7aca991ee54c22120eb8c28acdf7b9563e7_BEDROS008BLU_UK_Roscoe_Super_Kingsize_Bed_Aegean_Blue_LB01.jpg',:price => 499.00, :width => 202.00, :height => 114.00, :length => 215.00)
FurnitureOption.create(:capacity => "Super King Size", :kuan => "2 drawers",:furniture_id => 5, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/e/6/7/4e6796761d2a10bd533433c52871202eaefefa2f_Roscoe_Bed_With_Storage_Drawers_Aegean_blue_LB01.jpg',:price => 599.00, :width => 202.00, :height => 114.00, :length => 215.00)
FurnitureOption.create(:color => "Bay Green", :kuan =>"Carver",:furniture_id => 6, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/a/0/0/b/a00bf5ff56192470aa87ddd1a5c743e744ddae20_CHALLE025GRE_UK_Setof2_Lule_High_Back_Carver_Dining_Chairs_Pine_Green_velvet_Oak_LB01.jpg',:price => 279.00, :width => 60.00, :height => 83.00, :length => 61.00)
FurnitureOption.create(:color => "Bay Green", :kuan =>"Bar Stool",:furniture_id => 6, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/3/c/b/b/3cbb40208cc55eff89d09c41cbe93aaf935dd734_BARLLE012GRE_UK_Lule_Bar_Stool_Pine_Green_Velvet_LB01.jpg',:price => 249.00, :width => 51.00, :height => 94.00, :length => 56.00)
FurnitureOption.create(:color => "Bay Green", :kuan =>"Bench",:furniture_id => 6, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/c/9/d/e/c9deebdcc9ef7e553ca1f1ef8c3afb481144510c_BENLLE032GRE_UK_Lule_bench_Pine_Green_Velvet_LB01.jpg',:price => 279.00, :width => 61.00, :height => 83.00, :length => 140.00)
FurnitureOption.create(:color => "Flame Orange", :kuan =>"Carver",:furniture_id => 6, :image =>'https://res-2.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/0/f/1/f/0f1fe36d6d2a44a187ddcb0692a3cbe65e2aa138_CHALLE012ORA_UK_2x_Lule_High_back_Dining_Chairs_Flame_Orange_Velvet_LB01.jpg',:price => 279.00, :width => 60.00, :height => 83.00, :length => 61.00)
FurnitureOption.create(:color => "Flame Orange", :kuan =>"Bar Stool",:furniture_id => 6, :image =>'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/b/b/9/f/bb9fa7011745da9e2384eb18a21e48c243496156_BARLLE014ORA_UK_Lule_Bar_Stool_Flame_Orange_Velvet_LB01.jpg',:price => 249.00, :width => 51.00, :height => 94.00, :length => 56.00)
FurnitureOption.create(:color => "Flame Orange", :kuan =>"Bench",:furniture_id => 6, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/0/e/2/7/0e279881541145d5743e33a22d43c4def9deb9ba_BENLLE042ORA_UK_lule_dining_bench_flame_orange_walnut_LB01.jpg',:price => 279.00, :width => 61.00, :height => 83.00, :length => 140.00)
FurnitureOption.create(:color => "Otter Grey", :kuan =>"Carver",:furniture_id => 6, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/e/9/b/c/e9bc65ed8fa1869550216bc7b2c25c3fede4538b_CHALLE026GRY_UK_Setof2_Lule_High_Back_Carver_Dining_Chairs_Otter_Grey_velvet_Oak_LB01.jpg',:price => 279.00, :width => 60.00, :height => 83.00, :length => 61.00)
FurnitureOption.create(:color => "Otter Grey", :kuan =>"Bar Stool",:furniture_id => 6, :image =>'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/6/6/7/4667afed87f99d2f4783446d927acac1832601f1_BARLLE015GRY_UK_Lule_Bar_Stool_otter_Grey_Velvet_LB01.jpg',:price => 249.00, :width => 51.00, :height => 94.00, :length => 56.00)
FurnitureOption.create(:color => "Otter Grey", :kuan =>"Bench",:furniture_id => 6, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/3/a/5/f/3a5f3abe4059eb4b931505d5227bfb37ab686669_BENLLE040GRY_UK_Lule_dining_Bench_Otter_grey_Velvet_and_oak_LB01.jpg',:price => 279.00, :width => 61.00, :height => 83.00, :length => 140.00)
FurnitureOption.create(:material => "Grey Washed Mango Wood",:furniture_id => 7, :image =>'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/6/8/3/e/683e8e8bb0f0f17ab7c2a0ed341dd5f3570e3857_SETLOM032GRY_UK_Lomond_Dining_table_bench_set_Grey_wash_and_Black_LB01.jpg',:price => 599.00, :width => 90.00, :height => 76.00, :length => 180.00)
FurnitureOption.create(:material => "Mango Wood and Brass",:furniture_id => 7, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/3/a/2/5/3a254e7870bf529b3703610b0addd1dbdad24050_TBLLOM023BRA_UK_Lomond_Dining_Table_And_2_Benches_Set_Mango_Wood_And_Brass_LB01.jpg',:price => 599.00, :width => 90.00, :height => 76.00, :length => 180.00)
FurnitureOption.create(:color => "Ink Blue",:furniture_id => 8, :image =>'https://res-4.cloudinary.com/made-com/image/upload/b_auto,c_pad,h_550,w_2100/c_crop,g_auto,h_550,w_1050,d_made.svg,dpr_1.0,q_auto:best,f_auto/v4/catalog/product/asset/d/a/d/4/dad446943eca358d443a9dceeefa41c1f91e39af_CUSJUL005BLU_UK_Julius_Setof2_Velvet_Cushions_45x45cm_Ink_Blue_LB01.jpg',:price => 29.00, :width => 45.00, :height => 45.00, :length => 10.00)
FurnitureOption.create(:color => "Antique Gold",:furniture_id => 8, :image =>'https://res-1.cloudinary.com/made-com/image/upload/b_auto,c_pad,h_550,w_2100/c_crop,g_auto,h_550,w_1050,d_made.svg,dpr_1.0,q_auto:best,f_auto/v4/catalog/product/asset/9/c/f/3/9cf3611898f5f4298304712729d6164f3cbd78ff_CUSJUL004GLD_UK_Julius_Set_of_2_Velvet_Cushions_45x45cm_Antique_Gold_LB01.jpg',:price => 29.00, :width => 45.00, :height => 45.00, :length => 10.00)
FurnitureOption.create(:color => "Soft Pink",:furniture_id => 8, :image =>'https://res-1.cloudinary.com/made-com/image/upload/b_auto,c_pad,h_550,w_2100/c_crop,g_auto,h_550,w_1050,d_made.svg,dpr_1.0,q_auto:best,f_auto/v4/catalog/product/asset/b/6/1/7/b6170d2a151e63daa9bf7edb7200785a4cda101e_CUSJUL003PNK_UK_Julius_Set_of_2_Velvet_Cushions_45x45cm_Soft_Pink_LB01.jpg',:price => 29.00, :width => 45.00, :height => 45.00, :length => 10.00)
FurnitureOption.create(:color => "Teal",:furniture_id => 9, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/2/2/c/a/22caf895a7a02d7ecc463d24f9ce3200d8222bb8_RUGJAG018BLU_UK_Jago_Rug_200cm_diam_Teal_LB01.jpg',:price => 199.00, :width => 200.00, :height => 0, :length => 200)
FurnitureOption.create(:color => "Tonal Grey",:furniture_id => 9, :image =>'https://res-3.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/0/e/8a0e01afc7a8b772f44130a33c65d73ad8100469_RUGJGO016GRY_UK_Jago_Circular_Rug_200cm_Diameter_Tonal_Grey_LB01.jpg',:price => 199.00, :width => 200.00, :height => 0, :length => 200)
FurnitureOption.create(:color => "Antique Gold",:furniture_id => 9, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/6/e/1/c/6e1c0246dbbf59a779300516a484a860dc6a934b_RUGJAG019GLD_UK_Jago_Rug_200cm_diam_Antique_Gold_LB01.jpg',:price => 199.00, :width => 200.00, :height => 0, :length => 200)
FurnitureOption.create(:color => "Brass",:furniture_id => 10, :image =>'https://res-5.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/d/9/8/4/d98428cfb9c594e33a7fcecfa9c52c173b2c05e1_BTALIL005ZBR_UK_Lilo_Soap_Dispenser_Tumbler_Set_Brushed_Brass_LB01.jpg',:price => 0, :width => 0, :height => 0, :length => 0)
FurnitureOption.create(:color => "Copper",:furniture_id => 10, :image =>'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/4/3/b/8/43b89352c4c2848eb9661c41d566685b21ce34d9_BTALIL004ZCO_UK_Lilo_Soap_Dispenser_Tumbler_Set_Copper_LB01.jpg',:price => 0, :width => 0, :height => 0, :length => 0)



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
FurnituresMainCategory.create(:furniture_id => 6, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 6, :main_category_id => 4)
FurnituresMainCategory.create(:furniture_id => 6, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 6, :main_category_id => 8)
FurnituresMainCategory.create(:furniture_id => 7, :main_category_id => 1)
FurnituresMainCategory.create(:furniture_id => 7, :main_category_id => 5)
FurnituresMainCategory.create(:furniture_id => 8, :main_category_id => 2)
FurnituresMainCategory.create(:furniture_id => 8, :main_category_id => 4)
FurnituresMainCategory.create(:furniture_id => 8, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 8, :main_category_id => 8)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 2)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 4)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 5)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 6)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 7)
FurnituresMainCategory.create(:furniture_id => 9, :main_category_id => 8)
FurnituresMainCategory.create(:furniture_id => 10, :main_category_id => 2)
FurnituresMainCategory.create(:furniture_id => 10, :main_category_id => 3)
