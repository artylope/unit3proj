class OrdersController < ApplicationController
    before_action :authenticate_user!
    def index
        if params.key?("payment")
            if params[:payment]
                @payment = true
            end
        end
        @orders = Order.where(user_id: current_user.id).order(id: :desc)
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
        p JSON.parse(params[:data])
        @carts = Cart.where(user_id: current_user.id).where(id: JSON.parse(params[:data]))
        puts "//////////////////////////////"
        delivery_details = JSON.parse(params[:delivery])
        @order = Order.new
        @order.user_id = current_user.id
        @order.total_price = @carts.map{|x|x.quantity*x.furniture_option.price}.sum
        @order.recipient_name = delivery_details["name"]
        @order.recipient_contact = delivery_details["contact"]
        @order.recipient_address = delivery_details["address"]
        @order.delivery_day = delivery_details["day"]
        @order.delivery_time = delivery_details["time"]
        @order.recipient_note = delivery_details["note"]
        @order.save

        @carts.each do |cart|
            @furnitures_order = FurnituresOrder.new(order_id: @order.id, furniture_option_id: cart.furniture_option.id, quantity: cart.quantity)
            @furnitures_order.save
        end

        @carts.destroy_all
        redirect_to "/orders?payment=true"
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
