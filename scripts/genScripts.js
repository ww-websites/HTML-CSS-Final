$(document).ready(function() {
    // Personality Machine
    var itemContainer1 = document.getElementById('productContainer1');
    var itemContainer2 = document.getElementById('productContainer2');
    var itemContainer3 = document.getElementById('productContainer3');
    var itemContainer4 = document.getElementById('productContainer4');
    var temp1 = itemContainer1;
    var temp2 = itemContainer2;
    var containerCounter = 0;
    window.addEventListener("wheel", event => {        
        $( temp1 ).fadeOut( "fast");
        $( temp2 ).fadeIn( "slow");
        console.log(temp1 + " temp1");
        clearTimeout($.data(this, 'timer'));
        $.data(this, 'timer', setTimeout(function() {           
           if (containerCounter == 0) {
               temp1 = itemContainer1;
               temp2 = itemContainer2;
               containerCounter = 1;
               console.log(" contCount 0 ")
           } else if (containerCounter == 1){
               temp1 = itemContainer2;
               temp2 = itemContainer3;
               containerCounter = 2;
               console.log(" contCount 1 ")
           } else if (containerCounter == 2){
                temp1 = itemContainer3;
                temp2 = itemContainer4;
                containerCounter = 3;
                console.log(" contCount 2 ")
            } else if (containerCounter == 3){
                temp1 = itemContainer4;
                temp2 = itemContainer1;
                containerCounter = 0;
                console.log(" contCount 3 ")
            }
        }, 100));
    });
});

/*

*/


// scroll switches 1 to 2
// when scroll again, switches 2 to 3
// when scroll again, switches 3 to 4
// when scroll again, switches 4 to 1