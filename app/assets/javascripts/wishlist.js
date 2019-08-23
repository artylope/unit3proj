$(document).ready(function(){

    Paloma.start();
});

Paloma.controller('Wishlists', {
    index: function(){
        $(".wishlist-delete").each(function(){
                let eachDelete = this
                eachDelete.addEventListener("click",function(){
                    let deleteDiv = event.target
                    var check = confirm("Are you sure you want to delete?");
                    if (check == true) {
                        $.ajax({

                            url: `/wishlists/${deleteDiv.lastElementChild.value}`,
                            type: 'DELETE',
                            dataType: 'json',

                            success: function(data, textStatus, xhr) {
                                document.querySelector("tbody").removeChild(deleteDiv.parentNode.parentNode)
                                $(".wish-count").text(parseInt($(".wish-count").text())-1)
                            },
                            error: function(xhr, textStatus, errorThrown) {
                                console.log('Error in Database');
                            }
                        })
                    }else{
                        return false
                    }
                })
        })

        /////////////////////////////////////////////////////////////wishlist heart

        modalfunc()
    }
})