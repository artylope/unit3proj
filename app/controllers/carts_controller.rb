class CartsController < ApplicationController
    def index
        @carts = Cart.where(user_id: current_user.id)
    end
    def create

        @cart = Cart.new(cart_params)
        @cart.user_id = current_user.id
        @cart.quantity = 1
        if @cart.save
            redirect_to furnitures_path
        else
            render plain: "Unable to add to cart"
        end

    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy

        redirect_to carts_path
    end

    private
    def cart_params
        params.require(:cart).permit(:furniture_id)
    end
end
