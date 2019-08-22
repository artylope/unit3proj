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
    }
})