class FurnituresController < ApplicationController
    def index
        @furnitures = Furniture.all
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
        color = JSON.parse(params[:color])
        capacity = JSON.parse(params[:capacity])
        furniture_id = JSON.parse(params[:id])
        @furniture = Furniture.find(furniture_id).furniture_option.where(color: color, capacity: capacity)
        respond_to do |format|
            format.json { render json: @furniture.to_json }
        end
    end

    private
    def furniture_params
        params.require(:furniture).permit(:name, :price, :category, :img_url)
    end
end
