Rails.application.routes.draw do
    devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "furnitures#index"
    resources :furnitures
    get '/furnitures/:id/optionajax' => 'furnitures#optionajax'
    resources :carts
    get 'orders/stripepost' => 'orders#stripepost'
    resources :orders
    get '/wishlists/floorplan' => 'wishlists#floorplan'
    resources :wishlists


end
