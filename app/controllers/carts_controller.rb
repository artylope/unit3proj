class CartsController < ApplicationController
    before_action :authenticate_user!
    def index
        @carts = Cart.where(user_id: current_user.id)
        @wishlists = Wishlist.where(user_id: current_user.id)
        @arr = []
        @carts.each do |cart|
            options = [cart.furniture_option.color,cart.furniture_option.capacity,cart.furniture_option.material,cart.furniture_option.kuan]
            @arr.push({
                :cart_id => cart.id,
                :furniture_name => cart.furniture_option.furniture.name,
                :price => cart.furniture_option.price,
                :category => cart.furniture_option.furniture.category,
                :image => cart.furniture_option.image,
                :quantity => cart.quantity,
                :stripe_id => cart.furniture_option.stripe_id,
                :options => options.reject{|x|x.to_s.empty?}.join(", ")
            })
        end
        respond_to do |format|
            format.json { render json: @arr.to_json }
          end
        # respond_to do |format|
        #     format.js
        # end
    end
    def create

        @cart = Cart.new()
        @cart.user_id = current_user.id
        @cart.furniture_option_id = params[:furniture_option_id]
        if params[:quantity].empty?
            @cart.quantity = 1
        else
            @cart.quantity = params[:quantity]
        end

        @cart.save

    end

    def destroy
        puts "////////////////////////////////////"
        p params
        puts "////////////////////////////////////"
        @cart = Cart.find(params[:id])
        @cart.destroy

    end

    private
    def cart_params
        params.require(:cart).permit(:furniture_option_id,:quantity)
    end
end
