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

        $(".add-to-wishlist-button").click(function(){
            if($('.temp_information').data('user')){
                $(".login-warning").hide()
                $.ajax({
                    url: `/wishlists`,
                    type: 'POST',
                    data:{furniture_option_id :$(".furniture_option_id_input").val()},
                    dataType: 'json',

                    success: function(data, textStatus, xhr) {
                        console.log("POST TO WISHLIST DONE")
                        console.log($(".wish-count").text())
                        $(".wish-count").text(parseInt($(".wish-count").text())+1)
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


              //wishlist heart

            let wishlistHeartButton = document.querySelector('#add-to-wishlist-button');
            let wishlistHeart = document.querySelector('#wishlist-heart');
            wishlistHeartClasses = wishlistHeart.classList;
            console.log(wishlistHeartClasses);
            console.log(typeof wishlistHeartClasses);


            wishlistHeartButton.addEventListener('click', function(){
              var found = false;
              for(var i = 0; i < wishlistHeartClasses.length; i++) {
                  if (wishlistHeartClasses[i] === "bx-heart") {
                    wishlistHeart.classList.remove('bx-heart');
                    wishlistHeart.classList.add('bxs-heart');
                      break;
                  } else if (wishlistHeartClasses[i] === "bxs-heart") {
                    wishlistHeart.classList.remove('bxs-heart');
                    wishlistHeart.classList.add('bx-heart');
                  }
              }
              console.log('clicked');
              console.log(found);

            })


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
                            $(".cart-count").text(parseInt($(".cart-count").text())-1)
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
                        <td><div class="button is-success cart-delete">Delete<input value="${x.cart_id}"hidden/></div></td>
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
                            $(".cart-count").text(parseInt($(".cart-count").text())-1)
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            console.log('Error in Database');
                        }
                    })
                })
            })
        }
        const togglingOn = function(){
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
        }

        const togglingOff = function(){
            $(".modal").hide()
        }

        $(".cart-modal").click(togglingOn)
        $("#modal-cancel-button").click(togglingOff)
        $("#modal-x-button").click(togglingOff)
        /////////////////////////////////////////
    }

});

/////////////////////////////////////////////////////////////
// ╔═╗╦ ╦╦═╗╔╗╔╦╔╦╗╦ ╦╦═╗╔═╗  ╔═╗╦  ╔═╗╔╗╔╔╗╔╔═╗╦═╗   ╦╔═╗ //
// ╠╣ ║ ║╠╦╝║║║║ ║ ║ ║╠╦╝║╣   ╠═╝║  ╠═╣║║║║║║║╣ ╠╦╝   ║╚═╗ //
// ╚  ╚═╝╩╚═╝╚╝╩ ╩ ╚═╝╩╚═╚═╝  ╩  ╩═╝╩ ╩╝╚╝╝╚╝╚═╝╩╚═  ╚╝╚═╝ //
/////////////////////////////////////////////////////////////

Paloma.controller('Wishlists', {
            floorplan: function() {
                let furnitureArr = [];
                let coordinatesArr = [];
                let lengthRatio = 50;
                let calibrateStep = 0;

                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#floor_plan_image')
                                .attr('src', e.target.result)
                        };
                        reader.readAsDataURL(input.files[0]);
                    }
                    setTimeout(loadFloorPlanDiv, 800);
                }

                function loadFloorPlanDiv() {
                    var floorPlanImg = document.getElementById("floor_plan_image");
                    var floorPlanContainer = document.querySelector(".floor_plan_container");
                    var imgWidth = floorPlanImg.naturalWidth;
                    var imgHeight = floorPlanImg.naturalHeight;
                    floorPlanImg.style.width = imgWidth + "px";
                    floorPlanContainer.style.width = imgWidth + "px";
                    floorPlanContainer.style.height = imgHeight + "px";
                }

                function clearAllFurniture() {
                    document.querySelectorAll('.snap-grid').forEach((elem) => {
                        elem.parentNode.removeChild(elem);
                    })
                    document.querySelectorAll('.markers').forEach((elem) => {
                        elem.parentNode.removeChild(elem);
                    })
                    calibratePlan(calibrateStep = 0, null);
                }

                function placeDiv(x_pos, y_pos) {
                    var d = document.createElement('div');
                    d.setAttribute("id", "marker-" + x_pos + "-" + y_pos)
                    d.setAttribute("class", "markers");
                    d.style.position = "absolute";
                    d.style.left = x_pos - 6 + 'px';
                    d.style.top = y_pos - 6 + 'px';
                    document.body.appendChild(d);
                    console.log("append div");
                }

                function putMarker(event) {
                    coordinatesArr.push([event.pageX, event.pageY]);
                    console.log(event.pageX + ' - ' + event.pageY);
                    placeDiv(event.pageX, event.pageY);
                    console.dir(coordinatesArr);
                }

                function calibratePlan(step, event) {
                    switch (step) {
                        case 0:
                            //display div
                            document.getElementById('calibrate_menu').style.display = "block";
                            break;
                        case 1:
                            putMarker(event);
                            document.getElementById("calibrate_menu").children[1].style.textDecoration = "line-through";
                            break;
                        case 2:
                            putMarker(event);
                            document.getElementById("calibrate_menu").children[2].style.textDecoration = "line-through";
                            break
                        case 3:
                            let length = Math.max(Math.abs(coordinatesArr[0][1] - coordinatesArr[1][1]), Math.abs(coordinatesArr[0][0] - coordinatesArr[1][0]));
                            let lengthParam = parseFloat(document.getElementById('lengthParam').value);
                            lengthRatio = length / lengthParam;
                            console.log(lengthRatio);
                            document.getElementById('floating_menu').style.display = "block";
                            break;
                        default:
                            // code block
                    }
                }

                function loadEventListeners() {
                    console.log("loading event listeners");
                    var calibrateState = false;

                    var calibrateSubmit = document.querySelector('#submit_calibrate');
                    calibrateSubmit.addEventListener('click', function(event) {
                        calibratePlan(3, event);
                        document.getElementById('calibrate_menu').style.display = "none";
                    }, false);

                    var importFileButton = document.querySelector('#importFile');
                    importFileButton.addEventListener('change', function(event) {
                        readURL(this);
                    }, false);

                    document.addEventListener('click', function(event) {
                        // console.log("loc:"+event.pageX + ' - ' + event.pageY);
                        if (event.target.matches('.floatmenu')) {

                            let furnitureImg = event.target.getAttribute('src');
                            let furnitureName = furnitureImg.substring(0, furnitureImg.lastIndexOf('.'));

                            // Create a new element
                            let newNode = document.createElement('div');
                            furnitureArr.push(furnitureName);
                            newNode.setAttribute("class", "sofa grid-snap");
                            let idName = furnitureArr.length + "-" + furnitureName;
                            newNode.setAttribute("id", idName);
                            // Get the reference node
                            let referenceNode = document.querySelector('#furnitureDiv');
                            // Insert the new node before the reference node
                            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

                            let gridWidth = lengthRatio;
                            // console.log("inside show sofa, gridWidth= " + gridWidth);

                            let x = document.createElement("IMG");
                            x_width = parseInt(event.target.dataset.width) / 1000 * gridWidth;
                            x_height = parseInt(event.target.dataset.length) / 1000 * gridWidth;
                            console.log(x_width + " x " + x_height)
                            x.setAttribute("src", furnitureImg);
                            x.setAttribute("id", "img" + idName);
                            x.setAttribute("class", "furnitureIcon");
                            x.setAttribute("width", x_width + "px");
                            x.setAttribute("height", x_height + "px");
                            x.style.transform = "rotate(0deg)";
                            let element = document.getElementById(idName);
                            element.appendChild(x);
                            element.style.width = x_width + "px";
                            element.style.height = x_height + "px";
                            snapGrid(element);
                            doubleTap(element);
                        }

                        if (event.target.matches('#clearAllFurnitureButton')) {
                            clearAllFurniture();
                        }

                        if (event.target.matches('#calibrate')) {
                            calibrateState = !calibrateState;
                            console.log('calibrate calls : ' + calibrateState);
                            if (calibrateState) {
                                calibratePlan(calibrateStep, event);
                                calibrateStep++;
                            } else {
                                calibrateStep = 0;
                            }
                        }

                        if (event.target.matches('#floor_plan_overlay') && calibrateState) {
                            console.log('logging clicks: ' + coordinatesArr.length);
                            calibratePlan(calibrateStep, event);
                            calibrateStep++;
                        }
                    }, false);
                }

                function rotateFurniture(element) {
                    let angle = parseInt(document.getElementById(element.id).style.transform.replace('rotate(', ''));
                    if (angle >= 360) {
                        angle = 90;
                    } else {
                        angle += 90;
                    }
                    document.getElementById(element.id).style.transform = "rotate(" + angle + "deg)";
                }

                /////////////////////////////////////
                //    Interact.JS : Grid-Snap      //
                /////////////////////////////////////

                function snapGrid(element) {
                    var x = 0;
                    var y = 0
                    interact(element)
                        .draggable({
                            modifiers: [
                                interact.modifiers.snap({
                                    targets: [
                                        interact.createSnapGrid({
                                            x: 5,
                                            y: 5
                                        })
                                    ],
                                    range: Infinity,
                                    relativePoints: [{
                                        x: 0,
                                        y: 0
                                    }]
                                }),
                                interact.modifiers.restrict({
                                    restriction: element.parentNode,
                                    elementRect: {
                                        top: 0,
                                        left: 0,
                                        bottom: 1,
                                        right: 1
                                    },
                                    endOnly: true
                                })
                            ],
                            inertia: true
                        })
                        .on('dragmove', function(event) {
                            x += event.dx
                            y += event.dy

                            event.target.style.webkitTransform =
                                event.target.style.transform =
                                'translate(' + x + 'px, ' + y + 'px)'
                        })
                }

                /////////////////////////////////////
                //    Interact.JS : Double-Tap     //
                /////////////////////////////////////

                function doubleTap(element) {
                    interact(element)
                        .on('doubletap', function(event) {
                            console.log("doubletap evt target" + event.target.className);
                            if (event.target.className === 'furnitureIcon') {
                                rotateFurniture(event.target);
                            }

                        })
                }

                /////////////////////////////////////
                //    Interact.JS : Draggable      //
                /////////////////////////////////////

                interact('.draggable')
                    .draggable({
                        // enable inertial throwing
                        inertia: true,
                        // keep the element within the area of it's parent
                        modifiers: [
                            interact.modifiers.restrictRect({
                                restriction: 'parent',
                                endOnly: true
                            })
                        ],
                        // enable autoScroll
                        autoScroll: true,
                        // call this function on every dragmove event
                        onmove: dragMoveListener,
                        // call this function on every dragend event
                        onend: function(event) {
                        }
                    })

                function dragMoveListener(event) {
                    var target = event.target
                    // keep the dragged position in the data-x/data-y attributes
                    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

                    // translate the element
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)'

                    // update the posiion attributes
                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                }

                // window.dragMoveListener = dragMoveListener

                ////////////////////////////////
                //    Drag a div element      //
                ////////////////////////////////

                dragElement(document.getElementById("floor_plan_overlay"));

                function dragElement(elmnt) {
                    var pos1 = 0,
                        pos2 = 0,
                        pos3 = 0,
                        pos4 = 0;
                    if (document.getElementById(elmnt.id + "header")) {
                        // if present, the header is where you move the DIV from:
                        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                    } else {
                        // otherwise, move the DIV from anywhere inside the DIV:
                        elmnt.onmousedown = dragMouseDown;
                    }

                    function dragMouseDown(e) {
                        e = e || window.event;
                        e.preventDefault();
                        // get the mouse cursor position at startup:
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        document.onmouseup = closeDragElement;
                        // call a function whenever the cursor moves:
                        document.onmousemove = elementDrag;
                    }

                    function elementDrag(e) {
                        e = e || window.event;
                        e.preventDefault();
                        // calculate the new cursor position:
                        pos1 = pos3 - e.clientX;
                        pos2 = pos4 - e.clientY;
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        // set the element's new position:
                        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                    }

                    function closeDragElement() {
                        // stop moving when mouse button is released:
                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                }

                // LOAD EVENT LISTENERS
                loadEventListeners();

            }
        });
