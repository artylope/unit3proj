class FurnituresController < ApplicationController
    def index

        if user_signed_in?
            @wishlists = Wishlist.where(user_id: current_user.id)
            @carts = Cart.where(user_id: current_user.id)
        else
            @wishlists = []
            @carts = []
        end

        if params.key? ("category")
            @furnitures = Furniture.where(category:params[:category].titleize)
        elsif params.key? ("main_category")
            @furnitures = MainCategory.find_by(title:params[:main_category].titleize).furniture
        else
            @furnitures = Furniture.all
        end

    end

    def new
        @furniture = Furniture.new
    end

    def create
        @furniture = Furniture.new(furniture_params)
        if @furniture.save
            redirect_to @furniture
        else
            render 'new'
        end
    end

    def show

        @furniture = Furniture.find(params[:id])
        if user_signed_in?
            @carts = Cart.where(user_id: current_user.id)
            @wishlists = Wishlist.where(user_id: current_user.id)
        else
            @wishlists = []
            @carts = []
        end

    end

    def edit
        @furniture = Furniture.find(params[:id])
    end


    def update
        @furniture = Furniture.find(params[:id])

        if @furniture.update(furniture_params)
            redirect_to @furniture
        else
            render 'edit'
        end
    end

    def destroy
        @furniture = Furniture.find(params[:id])
        @furniture.destroy

        redirect_to furnitures_path
    end

    def optionajax
        puts "//////////////////////////////////"
        p params
        puts "//////////////////////////////////"
        color = if JSON.parse(params[:color]) == "" then nil else JSON.parse(params[:color]) end
        capacity = if JSON.parse(params[:capacity]) == "" then nil else JSON.parse(params[:capacity]) end
        material = if JSON.parse(params[:material]) == "" then nil else JSON.parse(params[:material]) end
        kuan = if JSON.parse(params[:kuan]) == "" then nil else JSON.parse(params[:kuan]) end
        furniture_id = JSON.parse(params[:id])
        @furniture = Furniture.find(furniture_id).furniture_option.where(color: color, capacity: capacity,material: material,kuan: kuan)
        @furniture_images = FurnitureImage.where(furniture_option_id: @furniture.ids[0])
        @furniture_description = Description.where(furniture_option_id: @furniture.ids[0])

        respond_to do |format|
            format.json { render json: {furniture:@furniture.to_json,furniture_images:@furniture_images.to_json,furniture_description:@furniture_description} }
        end
    end

    private
    def furniture_params
        params.require(:furniture).permit(:name, :price, :category, :img_url)
    end
end
