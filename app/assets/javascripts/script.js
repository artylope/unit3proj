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




$(document).ready(function(){

    Paloma.start();
});

Paloma.controller('Furnitures', {
    show: function(){

        let furniture_id = $('.temp_information').data('temp')
    // Executes when Rails Users#new is executed.
        const ajaxCall = function(e){

            // console.log($('.color').val())
            // console.log($('.capacity').val())
            $.ajax({
                url: `/furnitures/${furniture_id}/optionajax?color="${$('.color').val()}"&capacity="${$('.capacity').val()}"&material="${$('.material').val()}"&kuan="${$('.kuan').val()}"`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log(data[0].image)
                    $(".furniture_image").attr("src",data[0].image)
                    $(".price").text(data[0].price)
                    $(".furniture_option_id_input").val(data[0].id)
                    console.log("done")
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })


        }
        ajaxCall();
        $(".color").change(ajaxCall)
        $(".capacity").change(ajaxCall)
        $(".material").change(ajaxCall)
        $(".kuan").change(ajaxCall)

        $(".add-to-cart-button").click(function(){
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
        })

        //FOR MODAL///////////////////////////////

        const togglingOn = function(){
            $(".modal").addClass("is-active")

            $.ajax({
                url: `/carts`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log(data)

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
                        $("tbody").append(`
                            <tr>
                                <td><input type="checkbox" name="selected_cart_ids[]" value="${x.cart_id}"/></td>
                                <td>${x.furniture_name}</td>
                                <td>${x.price.toFixed(2)}</td>
                                <td>${x.category}</td>
                                <td><img src="${x.image}" style="width:200px;"/</td>
                                <td>${x.quantity}</td>
                                <td>${(x.quantity*x.price).toFixed(2)}</td>
                                <td><div class="cart-delete">Delete<input value="${x.cart_id}"hidden/></div></td>
                            </tr>
                            `)
                    })


                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
        }

        const togglingOff = function(){
            $(".modal").removeClass("is-active")
        }
        $(".cart-modal").click(togglingOn)
        $("#modal-cancel-button").click(togglingOff)
        $("#modal-x-button").click(togglingOff)
        /////////////////////////////////////////

    },
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
        const togglingOn = function(){
            $(".modal").toggle()
            $.ajax({
                url: `/carts`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log(data)

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
                        $("tbody").append(`
                            <tr>
                                <td><input type="checkbox" name="selected_cart_id" value="${x.cart_id}"/></td>
                                <td>${x.furniture_name}</td>
                                <td>${x.price.toFixed(2)}</td>
                                <td>${x.category}</td>
                                <td><img src="${x.image}" style="width:200px;"/</td>
                                <td>${x.quantity}</td>
                                <td>${(x.quantity*x.price).toFixed(2)}</td>
                                <td>Delete</td>
                            </tr>
                            `)
                    })


                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
        }

        const togglingOff = function(){
            $(".modal").toggle()
        }
        $(".cart-modal").click(togglingOn)
        $("#modal-cancel-button").click(togglingOff)
        $("#modal-x-button").click(togglingOff)
        /////////////////////////////////////////
    }

});
