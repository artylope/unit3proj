$(document).ready(function(){

    Paloma.start();
});

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
        modalfunc()
        wishlistfunc();
        /////////////////////////////////////////
    }
})