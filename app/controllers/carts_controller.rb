class CartsController < ApplicationController
    def index
        @carts = Cart.where(user_id: current_user.id)
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
        @cart = Cart.find(params[:id])
        @cart.destroy

        redirect_to carts_path
    end

    private
    def cart_params
        params.require(:cart).permit(:furniture_option_id,:quantity)
    end
end
