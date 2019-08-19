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
                url: `/furnitures/${furniture_id}/optionajax?color="${$('.color').val()}"&capacity="${$('.capacity').val()}"`,
                type: 'GET',
                dataType: 'json',

                success: function(data, textStatus, xhr) {
                    console.log(data[0].image)
                    $(".furniture_image").attr("src",data[0].image)
                    $(".price").text(data[0].price)
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })


        }
        $(".color").change(ajaxCall)
        $(".capacity").change(ajaxCall)

  }
});