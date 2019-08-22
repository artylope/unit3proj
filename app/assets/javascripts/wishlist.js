$(document).ready(function(){

    Paloma.start();
});

Paloma.controller('Wishlists', {
    index: function(){
        $(".wishlist-delete").each(function(){
                let eachDelete = this
                eachDelete.addEventListener("click",function(){
                    let deleteDiv = event.target
                    $.ajax({

                        url: `/wishlists/${deleteDiv.lastElementChild.value}`,
                        type: 'DELETE',
                        dataType: 'json',

                        success: function(data, textStatus, xhr) {
                            document.querySelector("tbody").removeChild(deleteDiv.parentNode.parentNode)
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            console.log('Error in Database');
                        }
                    })
                })
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
    }
})