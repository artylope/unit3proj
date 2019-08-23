//-------------navigation js start

document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}

});

//-------------navigation js end
const wishlistfunc = function(){
    let wishlistHeartButton = document.querySelector('#add-to-wishlist-button');
        let wishlistHeart = document.querySelector('#wishlist-heart');
        wishlistHeartClasses = wishlistHeart.classList;

        /////////////////////////////////////

        const addWish = function(){
            $.ajax({
                url: `/wishlists`,
                type: 'POST',
                data:{furniture_option_id :$(".furniture_option_id_input").val()},
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log("POST TO WISHLIST DONE")
                    $(".wish-count").text(parseInt($(".wish-count").text())+1)
                    $(".wishlist_id_input").val(data.wishlist.id)
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
        }

        const destroyWish = function(){
            $.ajax({
                url: `/wishlists/${$(".wishlist_id_input").val()}`,
                type: 'DELETE',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log($(".wish-count").text())
                    $(".wish-count").text(parseInt($(".wish-count").text())-1)
                    $(".wishlist_id_input").val('#')
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
        }


        wishlistHeartButton.addEventListener('click', function(){
            $(".login-warning").hide()
            if($('.temp_information').data('user')){
                var found = false;
                for(var i = 0; i < wishlistHeartClasses.length; i++) {
                    if (wishlistHeartClasses[i] === "bx-heart") {
                        wishlistHeart.classList.remove('bx-heart');
                        wishlistHeart.classList.add('bxs-heart');
                        addWish();
                          break;
                    } else if (wishlistHeartClasses[i] === "bxs-heart") {
                        wishlistHeart.classList.remove('bxs-heart');
                        wishlistHeart.classList.add('bx-heart');
                        destroyWish();
                    }
                }
                console.log('clicked');
                console.log(found);
            }else{
                $(".login-warning").show()
            }
        })
}
const modalfunc = function(){
    const refreshModal = function(data){
            $(".modal-table").html("")
            $(".modal-table").append(`<tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Options</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>`)
            data.forEach(x=>{
                $(".modal-table").append(`
                    <tr>
                        <td><input type="checkbox" class="cart-checkbox" name="selected_cart_ids[]" value="${x.cart_id}" data-stripe-id="${x.stripe_id}" data-quantity="${x.quantity}" checked/></td>
                        <td>${x.furniture_name}</td>
                        <td>${x.price.toFixed(2)}</td>
                        <td>${x.category}</td>
                        <td>${x.options}</td>
                        <td><img src="${x.image}" style="width:200px;"/</td>
                        <td>${x.quantity}</td>
                        <td>${(x.quantity*x.price).toFixed(2)}</td>
                        <td><a class="cart-delete bx bxs-x-circle"><input value="${x.cart_id}"hidden/></a></td>
                    </tr>
                    `)

            })


        }
        const setCheckBoxOnchange = function(){
            $(".cart-checkbox").each(function(){
                $(this).change(function(){
                    calculateModalTotal();
                })
            })
        }
        const resetDestroyButton = function(){
             $(".cart-delete").each(function(){

                let eachDelete = this
                eachDelete.addEventListener("click",function(){
                    let deleteDiv = event.target
                    var check = confirm("Are you sure you want to delete this?");
                    if (check == true) {
                        $.ajax({

                            url: `/carts/${deleteDiv.lastElementChild.value}`,
                            type: 'DELETE',
                            dataType: 'json',

                            success: function(data, textStatus, xhr) {
                                document.querySelector("table").removeChild(deleteDiv.parentNode.parentNode)
                                checkModalEmpty();
                                if(parseInt($(".cart-count").text())<0){
                                    $(".cart-count").text(0)
                                }else{
                                    $(".cart-count").text(parseInt($(".cart-count").text())-1)
                                }

                                calculateModalTotal();
                            },
                            error: function(xhr, textStatus, errorThrown) {
                                console.log('Error in Database');
                            }
                        })
                    }
                    else {
                        return false;
                    }

                })
            })
        }

        const checkModalEmpty = function(){
            let table = document.querySelector(".modal-table")
            if(table.children.length<2){
                $(".checkout-button").prop("disabled", true)
            }else{
                console.log("can checkout")
                $(".checkout-button").prop("disabled", false)
            }

        }

        const calculateModalTotal = function(){
            let total = 0
            $(".cart-checkbox").each(function(){
               if ($(this).prop("checked")){
                total += parseFloat($(this).parent().next().next().text())
               }
            })
            $(".cart-total").text('$'+ total.toFixed(2))
        }

        const togglingOn = function(){
            if($('.temp_information').data('user')){
                $(".modal").show()

                $.ajax({
                    url: `/carts`,
                    type: 'GET',
                    dataType: 'json',

                    success: function(data, textStatus, xhr) {
                        refreshModal(data);
                        setCheckBoxOnchange();
                        resetDestroyButton();
                        checkModalEmpty();
                        calculateModalTotal();


                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log('Error in Database');
                    }
                })
            }else{
                console.log("not logged in")
            }
        }

        const togglingOff = function(){
            $(".modal").hide()
        }

        $(".cart-modal").click(togglingOn)
        $("#modal-cancel-button").click(togglingOff)
        $("#modal-x-button").click(togglingOff)

        /////////////////////////////////////////
        //          FOR STRIPE                 //
        /////////////////////////////////////////

        var stripe = Stripe('pk_test_WQKH5BikkpGNAq5vFXGih3Fi00FZd6z4fh');
        let checkoutButton = document.querySelector(".checkout-button")
        checkoutButton.addEventListener('click', function () {
            var check = confirm("Confirm checking out?");
                    if (check == true) {
                        let item_arr = []
                        let cart_ids = []
                        $(".cart-checkbox").each(function(){
                            if ($(this).prop("checked")){

                                item_arr.push({sku:$(this).attr("data-stripe-id"),quantity:parseInt($(this).attr("data-quantity"))})
                                cart_ids.push($(this).val())
                            }
                        })
                        let string = JSON.stringify(cart_ids)






                        // stripe.redirectToCheckout({
                        //     items: item_arr,
                        //     customerEmail: $('.temp_information').data('email'),
                        //     successUrl: `http://127.0.0.1:3000/orders/stripepost?data=${string}`,
                        //     cancelUrl: 'http://127.0.0.1:3000/'
                        //   });
                    }else{
                        console.log("nothing")
                    }

        });
}


$(document).ready(function(){

    Paloma.start();
});
