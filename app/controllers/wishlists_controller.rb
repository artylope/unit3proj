class WishlistsController < ApplicationController
    before_action :authenticate_user!
    def index
        @wishlists = Wishlist.where(user_id: current_user.id)
        @carts = Cart.where(user_id: current_user.id)
    end
    def create

        @wishlist = Wishlist.new()
        @wishlist.user_id = current_user.id
        @wishlist.furniture_option_id = params[:furniture_option_id]
        @wishlist.save
        respond_to do |format|
            format.json { render json: {wishlist:@wishlist} }
        end

    end


    def floorplan
        @wishlists = Wishlist.where(user_id: current_user.id)
        @carts = Cart.where(user_id: current_user.id)
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
