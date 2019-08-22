class WishlistsController < ApplicationController
    def index
        # @wishlists = Wishlist.where(user_id: current_user.id)
        # @arr = []
        # @wishlists.each do |wishlist|
        #     @arr.push({
        #         :wishlist_id => wishlist.id,
        #         :furniture_name => wishlist.furniture_option.furniture.name,
        #         :price => wishlist.furniture_option.price,
        #         :category => wishlist.furniture_option.furniture.category,
        #         :image => wishlist.furniture_option.image,
        #     })
        # end
        # respond_to do |format|
        #     format.json { render json: @arr.to_json }
        # end
        # respond_to do |format|
        #     format.js
        # end
    end
    def create

        @wishlist = Wishlist.new()
        @wishlist.user_id = current_user.id
        @wishlist.furniture_option_id = params[:furniture_option_id]
        puts "////////////////////////////////////"
        p params
        puts "////////////////////////////////////"
        @wishlist.save

    end

    def destroy
        puts "////////////////////////////////////"
        p params
        puts "////////////////////////////////////"
        @wishlist = Wishlist.find(params[:id])
        @wishlist.destroy

    end

    private
    def wishlist_params
        params.require(:wishlist).permit(:furniture_option_id)
    end
end
