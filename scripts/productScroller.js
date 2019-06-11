$(document).ready(function() {
    //Scroller Machine
    var itemContainer1 = document.getElementById('productContainer1');
    var itemContainer2 = document.getElementById('productContainer2');
    var itemContainer3 = document.getElementById('productContainer3');
    var itemContainer4 = document.getElementById('productContainer4');
    var temp1 = itemContainer1;
    var temp2 = itemContainer2;
    var containerCounter = 0;    
    window.addEventListener("wheel", event => {
        $( temp1 ).slideUp("slow");
        $( temp1 ).fadeOut( "fast");
        $( temp2 ).slideUp("slow");
        $( temp2 ).fadeIn( "slow");        
        //clearTimeout($.data(this, 'timer'));
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
        }, 150));
    });
});

/*
//////////
This machine allows for the smooth fading via scroll wheel of a row of items.
When the user scrolls the mouse wheel, the row of items will fade out and then a new row of items will fade in.

A developer can create more of this loop by adding more if statements and incrementing the counter and container variables.

This scroller isn't perfect yet. It is jerky, but it is working well enough to submit for class.

The scroll down button should scroll the items, but I can't figure out how to get my current function to do that on a button click and I don't
    have time to sort it out. Submitting this as a WIP, as I'm sure I've demonstrated capability at this point.
//////////
*/
