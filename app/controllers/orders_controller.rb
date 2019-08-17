class OrdersController < ApplicationController
    def create
        @carts = Cart.where(user_id: current_user.id)

        if @furniture.save
            redirect_to @furniture
        else
            render 'new'
        end
    end
    private

end
