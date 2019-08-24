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
            $(".cart-body").html("")
            $(".cart-body").append(`
                <div class="cart-items">

                </div>`)

            data.forEach(x=>{
                $(".cart-items").append(`
                    <div class="cart-item">

                      <div class="cart-item-checkbox">
                        <input type="checkbox" class="cart-checkbox" name="selected_cart_ids[]" value="${x.cart_id}" data-stripe-id="${x.stripe_id}" data-quantity="${x.quantity}" checked/>
                      </div>
                      <div class="cart-item-image">
                        <img src="${x.image}"/>
                      </div>
                      <div class="cart-item-description">
                        ${x.furniture_name}</br>
                        ${x.category}</br>
                        ${x.options}</br>
                      </div>
                      <div class="cart-item-qty">
                        ${x.quantity}
                      </div>
                      <div class="cart-item-price">
                        ${(x.quantity*x.price).toFixed(2)}
                      </div>
                      <a class="cart-delete bx bxs-x-circle"><input value="${x.cart_id}"hidden/></a>
                    </div>

                    `)

            })
            $(".cart-body").append(`
                <div class="cart-total-section"><span class="total-label">Total</span><span class="cart-total"></span></div>
                `)
        createCheckOutButton();

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
                                document.querySelector(".modal-table-body").removeChild(deleteDiv.parentNode.parentNode)
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
            let table = document.querySelector(".modal-table-body")
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
                total += parseFloat($(this).parent().next().next().next().next().text())
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

        $("#modal-x-button").click(togglingOff)

        /////////////////////////////////////////
        //          FOR STRIPE                 //
        /////////////////////////////////////////
        const stripeActivation = function(cart_ids_string,item_arr){
            return function(){
                var stripe = Stripe('pk_test_WQKH5BikkpGNAq5vFXGih3Fi00FZd6z4fh');
                var check = confirm("Confirm checking out?");
                let day_timing = null
                $(".day-timing").each(function(){
                    if($(this).prop("checked")){
                        day_timing = $(this).val()
                    }
                })
                let time_timing = null
                $(".time-timing").each(function(){
                    if($(this).prop("checked")){
                        time_timing = $(this).val()
                    }
                })
                let deliveryDetails = {name:$("#recipient-name").val(),contact:$("#recipient-contact").val(),address:$("#delivery-address").val(),day:day_timing,time:time_timing,note:$("#recipient-note").val()}
                let delivery = JSON.stringify(deliveryDetails)
                if (check == true) {
                    var configForStripeUrl;
                    let URL = window.location.href;
                    if( URL.includes("http://127.0.0.1") ){
                        configForStripeUrl = "http://127.0.0.1:3000";
                    }else if( URL.includes("http://localhost") ){
                        configForStripeUrl = "http://127.0.0.1:3000";
                    }else{
                        configForStripeUrl = "https://oakandbrass.herokuapp.com";
                    }

                    stripe.redirectToCheckout({
                      items: item_arr,
                      customerEmail: $('.temp_information').data('email'),
                      successUrl: `${configForStripeUrl}/orders/stripepost?data=${cart_ids_string}&delivery=${delivery}`,
                      cancelUrl: `${configForStripeUrl}`
                    });
                }else{
                    console.log("nothing")
                }

            }
        }

        const checkValid = function(){
            if ($("#recipient-name").val() && $("#recipient-contact").val() && $("#delivery-address").val()){
                $(".payment-button").attr("disabled", false)
            }else{
                $(".payment-button").attr("disabled", true)
            }
        }
        const createCheckOutButton = function(){


            $(".checkout-button").remove()
            $(".payment-button").remove()
            $("#modal-cancel-button").remove()
            $(".modal-card-foot").prepend(`<button  class="button is-success checkout-button" role="link">Checkout</button><div class="button" id="modal-cancel-button">Cancel</div>`)
            $("#modal-cancel-button").click(togglingOff)
            let checkoutButton = document.querySelector(".checkout-button")
            checkoutButton.addEventListener('click', function () {
                console.log("tat")

                let item_arr = []
                let cart_ids = []
                $(".cart-checkbox").each(function(){
                    if ($(this).prop("checked")){

                        item_arr.push({sku:$(this).attr("data-stripe-id"),quantity:parseInt($(this).attr("data-quantity"))})
                        cart_ids.push($(this).val())
                    }else{
                        console.log("nothing")
                    }
                })
                //store checkout details
                let string = JSON.stringify(cart_ids)

                //change modal into recipient details page
                $(".cart-title").text("Recipient Details")
                $(".cart-body").html("")
                $(".checkout-button").remove()
                $(".cart-body").append(`
                  <div class="progress-steps-outer">
                    <div class="progress-steps-inner">
                      <div class="all-steps">
                        <div class="each-step">
                          <div class="step-number active">1</div>
                        </div>
                        <div class="step-line active"></div>
                        <div class="each-step">
                          <div class="step-number active">2</div>
                        </div>
                        <div class="step-line"></div>
                        <div class="each-step">
                          <div class="step-number">3</div>
                        </div>
                      </div>
                      <div class="all-steps-label">
                        <div class="each-step">
                          <div class="step-label">Review Cart</div>
                        </div>
                        <div class="each-step">
                          <div class="step-label">Enter Delivery Details</div>
                        </div>
                        <div class="each-step">
                          <div class="step-label">Make Payment</div>
                        </div>
                      </div>
                    </div>
                  </div>






                    <div class="field">
                        <label class="label">Recipient Name</label>
                        <div class="control">
                            <input class="input" name="recipient-name" id="recipient-name" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Recipient Contact</label>
                        <div class="control">
                            <input class="input" name="recipient-contact"  id="recipient-contact" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Delivery Address</label>
                        <div class="control">
                            <input class="input" name="delivery-address"  id="delivery-address" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Delivery day</label>
                        <div class="control">
                            <label class="radio">
                                <input type="radio" class="day-timing"name="day-timing" value="Any day" checked>
                                Any day
                            </label>
                            <label class="radio">
                                <input type="radio" class="day-timing"name="day-timing" value="Weekdays only">
                                Weekdays only
                            </label>
                            <label class="radio">
                                <input type="radio" class="day-timing"name="day-timing" value="Weekends only">
                                Weekends only
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Delivery Timing</label>
                        <div class="control">
                            <label class="radio">
                                <input type="radio" class="time-timing"name="time-timing" value="8am-12pm" checked>
                                8am-12pm
                            </label>
                            <label class="radio">
                                <input type="radio" class="time-timing"name="time-timing" value="1pm-6pm">
                                1pm-6pm
                            </label>
                            <label class="radio">
                                <input type="radio" class="time-timing"name="time-timing" value="7pm-10pm">
                                7pm-10pm
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Note to deliverer</label>
                        <div class="control">
                            <textarea class="textarea" name="recipient-note" id="recipient-note"></textarea>
                        </div>
                    </div>

                    `)
                $(".modal-card-foot").prepend(`<button  class="button is-success payment-button" role="link" disabled>Go to Payment</button>`)
                $("#recipient-name").change(checkValid)
                $("#recipient-contact").change(checkValid)
                $("#delivery-address").change(checkValid)
                $(".payment-button").click(stripeActivation(string,item_arr))


            });


        }

}


$(document).ready(function(){

    Paloma.start();
});
