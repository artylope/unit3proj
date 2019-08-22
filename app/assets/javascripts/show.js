

Paloma.controller('Furnitures', {
    show: function(){
        let color = null
        let capacity = null
        let kuan = null
        let material = null

        let furniture_id = $('.temp_information').data('temp')


        const addEventListenerToImages = function(){
            let images = document.querySelectorAll(".individual-images");
            let main_image = document.querySelector(".furniture_image");
            images.forEach(x=>x.addEventListener("click",function(){
                    main_image.src = event.target.src
                })
            )
        }

        const normalCall = function(data){
            $(".furniture_image").attr("src",JSON.parse(data.furniture)[0].image)
            $(".price").text("$"+JSON.parse(data.furniture)[0].price.toFixed(2))
            $(".furniture_option_id_input").val(JSON.parse(data.furniture)[0].id)
            $("#short-description").text(data.furniture_description[0].short)
            $("#long-description").text(data.furniture_description[0].long)
            let images_arr = JSON.parse(data.furniture_images)
            $(".furniture-image-list").append(`<img class="individual-images" src="${JSON.parse(data.furniture)[0].image}"  />`)
            images_arr.forEach(x=>{
                $(".furniture-image-list").append(`<img class="individual-images" src="${x.image}" />`)
            })
            addEventListenerToImages();
            console.log("done")
        }

        const ajaxCallInitial = function(e){
            //START FROM HERE
            color = $(".color-initial").val()
            capacity = $(".capacity-initial").val()
            kuan = $(".kuan-initial").val()
            material = $(".material-initial").val()
            $.ajax({
                url: `/furnitures/${furniture_id}/optionajax?color="${color}"&capacity="${capacity}"&material="${material}"&kuan="${kuan}"`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    normalCall(data)
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })


        }

        const ajaxCall = function(){
            $(".furniture-image-list").html("")
            color = event.target.getAttribute("name") === "color"? event.target.getAttribute("value") : color;
            capacity = event.target.getAttribute("name") === "capacity"? event.target.getAttribute("value") : capacity;
            material = event.target.getAttribute("name") === "material"? event.target.getAttribute("value") : material;
            kuan = event.target.getAttribute("name") === "kuan"? event.target.getAttribute("value") : kuan;
            $.ajax({
                url: `/furnitures/${furniture_id}/optionajax?color="${color}"&capacity="${capacity}"&material="${material}"&kuan="${kuan}"`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    normalCall(data)
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })


        }
        ajaxCallInitial();
        $(".color").each(function(){
            let x = this
            x.addEventListener("click",ajaxCall)
        })
        $(".capacity").each(function(){
            let x = this
            x.addEventListener("click",ajaxCall)
        })
        $(".material").each(function(){
            let x = this
            x.addEventListener("click",ajaxCall)
        })
        $(".kuan").each(function(){
            let x = this
            x.addEventListener("click",ajaxCall)
        })


        $(".add-to-cart-button").click(function(){
            if($('.temp_information').data('user')){
                $(".login-warning").hide()
                $.ajax({
                    url: `/carts`,
                    type: 'POST',
                    data:{quantity:$("#quantity-input").val(),furniture_option_id :$(".furniture_option_id_input").val()},
                    dataType: 'json',

                    success: function(data, textStatus, xhr) {
                        console.log("POST TO CART DONE")
                        console.log($(".cart-count").text())
                        $(".cart-count").text(parseInt($(".cart-count").text())+1)
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log('Error in Database');
                    }
                })
            }else{
                $(".login-warning").show()
            }

        })


        ////////////////////////////////////////////////////////////FOR ANIMATION
        //clicking on add and minus modifiers affects the quantity value

          let prodQty = document.querySelector('#quantity-input').value;
          prodQty = parseInt(prodQty);
          console.log('prod quantity ' + prodQty);
          let addOne = document.querySelector('#qty-add-1');
          let minusOne = document.querySelector('#qty-minus-1');
          let addToCart = document.querySelector('#add-to-cart-button');
          let addToCartSection = document.querySelector('#product-buttons')

          //clicking on add , adds 1 to qty

          addOne.addEventListener('click', function(){
              prodQty += 1;
              minusOne.removeAttribute("disabled", "");
              addToCart.removeAttribute("disabled", "");
              console.log('prod quantity ' + prodQty);
              document.getElementById('quantity-input').value = prodQty;
          })

          //clicking on minus , minus 1 to qty, if is 0, disables button

          minusOne.addEventListener('click', function(){
            if (prodQty >= 1){
              prodQty -= 1;
              console.log('prod quantity ' + prodQty);
              document.getElementById('quantity-input').value = prodQty;
              minusOne.removeAttribute("disabled", "");
              addToCart.removeAttribute("disabled", "");
            }

            if (prodQty === 0){
              console.log('prod qty is 0');
              minusOne.setAttribute("disabled", "");
              addToCart.setAttribute("disabled", "");
            }
          })

          //clicking on add to cart, do a plus 1 animation
          addToCart.addEventListener('click', function(){
            console.log('click');
            console.log($('.temp_information').data('user'))
            if($('.temp_information').data('user')){
                addToCart.classList.add("is-loading");

                let cartAddedStatus = false;

                setTimeout(function(){
                  cartAddedStatus = true;


                  //if true, do this animation
                  if(cartAddedStatus ===true ){

                    addToCart.classList.remove("is-loading");
                    var plusOne = document.createElement("div");
                    plusOne.innerText = "+1";
                    plusOne.classList.add("cart-plus-one");
                    addToCartSection.appendChild(plusOne);
                    console.log('added');
                    setTimeout(function(){
                      plusOne.remove();
                    }, 500);

                  } else {

                    addToCart.classList.remove("is-loading");
                    console.log('not added');
                  }


                }, 1000);
            }else{
                console.log("not logged in")
            }





          })

        /////////////////////////////////////////////////////////////wishlist heart

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


        //FOR MODAL///////////////////////////////
        const refreshModal = function(data){
            $("table").html("")
            $("table").append(`<tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>`)
            data.forEach(x=>{
                $("table").append(`
                    <tr>
                        <td><input type="checkbox" name="selected_cart_ids[]" value="${x.cart_id}"/></td>
                        <td>${x.furniture_name}</td>
                        <td>${x.price.toFixed(2)}</td>
                        <td>${x.category}</td>
                        <td><img src="${x.image}" style="width:200px;"/</td>
                        <td>${x.quantity}</td>
                        <td>${(x.quantity*x.price).toFixed(2)}</td>
                        <td><a class="button is-success cart-delete" data-confirm="Are you sure?">Delete<input value="${x.cart_id}"hidden/></a></td>
                    </tr>
                    `)

            })


        }

        const resetDestroyButton = function(){
             $(".cart-delete").each(function(){
                let eachDelete = this
                eachDelete.addEventListener("click",function(){
                    let deleteDiv = event.target
                    $.ajax({

                        url: `/carts/${deleteDiv.lastElementChild.value}`,
                        type: 'DELETE',
                        dataType: 'json',

                        success: function(data, textStatus, xhr) {
                            document.querySelector("table").removeChild(deleteDiv.parentNode.parentNode)
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            console.log('Error in Database');
                        }
                    })
                })
            })
        }
        const togglingOn = function(){
            if($('.temp_information').data('user')){
                $(".modal").show()

                $.ajax({
                    url: `/carts`,
                    type: 'GET',
                    dataType: 'json',

                    success: function(data, textStatus, xhr) {
                        refreshModal(data)
                        resetDestroyButton();

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


    }
})