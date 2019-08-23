Paloma.controller('Furnitures', {
    index: function(){
        const doSort = function(){
            console.log("TEST")
            let items = document.querySelectorAll(".for-sort");
            let itemsArr = []
            items.forEach(x=>itemsArr.push(x))
            if($(this).val() === "name-asc"){
                itemsArr = itemsArr.sort(function(a,b){
                    if(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText < b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText) { return -1; }
                    if(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText > b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText) { return 1; }
                    return 0;
                   })
            }else if($(this).val() === "name-dsc"){
                itemsArr = itemsArr.sort(function(a,b){
                    if(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText > b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText) { return -1; }
                    if(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText < b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText) { return 1; }
                    return 0;
                   })
            }else if($(this).val() === "price-asc"){
                itemsArr = itemsArr.sort(function(a,b){
                    return parseFloat(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText.replace( /^\D+/g, ''))-parseFloat(b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText.replace( /^\D+/g, ''))
                })
            }else if($(this).val() === "price-dsc"){
                itemsArr = itemsArr.sort(function(a,b){
                    return parseFloat(b.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText.replace( /^\D+/g, ''))-parseFloat(a.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText.replace( /^\D+/g, ''))
                })
            }
            let mother = document.querySelector(".sort-mother")
            mother.innerHTML = ""
            console.log(mother.innerHTML)
            itemsArr.forEach(x=>mother.appendChild(x))

        }

        $(".sort-by").change(doSort)

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
                        <td><input type="checkbox" class="cart-checkbox" name="selected_cart_ids[]" value="${x.cart_id}" data-stripe-id="${x.stripe_id}" data-quantity="${x.quantity}" checked/></td>
                        <td>${x.furniture_name}</td>
                        <td>${x.price.toFixed(2)}</td>
                        <td>${x.category}</td>
                        <td><img src="${x.image}" style="width:200px;"/</td>
                        <td>${x.quantity}</td>
                        <td>${(x.quantity*x.price).toFixed(2)}</td>
                        <td><a class="button is-success cart-delete">Delete<input value="${x.cart_id}"hidden/></a></td>
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
                                $(".cart-count").text(parseInt($(".cart-count").text())-1)
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
            $(".cart-total").text("Total: $"+total.toFixed(2))
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
            var check = confirm("Are you sure you want to delete?");
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
                        stripe.redirectToCheckout({
                            items: item_arr,
                            customerEmail: $('.temp_information').data('email'),
                            successUrl: `http://127.0.0.1:3000/orders/stripepost?data=${string}`,
                            cancelUrl: 'http://127.0.0.1:3000/'
                          });
                    }else{
                        console.log("nothing")
                    }

        });
        /////////////////////////////////////////
    }
})