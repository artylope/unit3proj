class OrdersController < ApplicationController
    before_action :authenticate_user!
    def index
        @orders = Order.where(user_id: current_user.id)
        @carts = Cart.where(user_id: current_user.id)
        @wishlists = Wishlist.where(user_id: current_user.id)
    end


    def create
        puts "//////////////////////////////"
        p params[:selected_cart_id]
        @carts = Cart.where(user_id: current_user.id).where(id: params[:selected_cart_ids])
        p @carts
        puts "//////////////////////////////"


        @order = Order.new
        @order.user_id = current_user.id
        @order.total_price = @carts.map{|x|x.quantity*x.furniture_option.price}.sum

        @order.save

        @carts.each do |cart|
            @furnitures_order = FurnituresOrder.new(order_id: @order.id, furniture_option_id: cart.furniture_option.id, quantity: cart.quantity)
            @furnitures_order.save
        end

        @carts.destroy_all
        redirect_to furnitures_path

    end

    def stripepost
        puts "//////////////////////////////"
        p params[:data]
        p JSON.parse(params[:data])
        @carts = Cart.where(user_id: current_user.id).where(id: JSON.parse(params[:data]))
        p @carts
        puts "//////////////////////////////"


        @order = Order.new
        @order.user_id = current_user.id
        @order.total_price = @carts.map{|x|x.quantity*x.furniture_option.price}.sum

        @order.save

        @carts.each do |cart|
            @furnitures_order = FurnituresOrder.new(order_id: @order.id, furniture_option_id: cart.furniture_option.id, quantity: cart.quantity)
            @furnitures_order.save
        end

        @carts.destroy_all
        redirect_to furnitures_path
    end

    def show
        @order = Order.find(params[:id])
        @carts = Cart.where(user_id: current_user.id)
        @wishlists = Wishlist.where(user_id: current_user.id)
    end

    private
    def furniture_params
        params.require(:order).permit(:selected_cart_ids)
    end


end
