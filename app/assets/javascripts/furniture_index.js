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
})