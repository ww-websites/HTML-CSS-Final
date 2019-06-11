$(document).ready(function() {
var funShirt = document.getElementById('funShirt');    
var elegantShirt = document.getElementById('elegantShirt');
var jeans = document.getElementById('jeans');
var dressPants = document.getElementById('dressPants');
var imgNode = document.getElementsByTagName('imgBox1')[0];
var btnNode = document.getElementsByTagName('button')[0];
var funCount = 0;
var seriousCount = 0;

funShirt.onclick = function() {
    funCount++;
    imgClick();
    console.log("Clicked fun shirt");
}

elegantShirt.onclick = function() {
    seriousCount++;
    imgClick();
    console.log("Clicked elegant shirt");
}

jeans.onclick = function() {
    funCount++;
    console.log("Clicked dress pants");
    redirect();
}

dressPants.onclick = function() {
    seriousCount++;
    console.log("Clicked dress pants");
    redirect();
}

btnNode.onclick = function() {
    console.log("redirect seriouscount");
    window.location = "../main.html";
}


function imgClick() {
    $( ".imgA" ).fadeOut( "fast");
    $( ".imgB" ).fadeIn( "slow");
    btnNode.innerHTML = "which pants fit your personality best?";
}

function redirect() {
    if (funCount > 0) {
        console.log("redirect funcount");
        window.location = "../sites/rowdyCollection.html";
    }
    if (seriousCount > 0) {
        console.log("redirect seriouscount");
        window.location = "../sites/elegantCollection.html";
    }
}
    btnNode.style.fontFamily = "Indie Flower";
    btnNode.innerHTML = "Well, hello, be.u.tiful.";								
    setTimeout(function() { btnNode.innerHTML = "which shirt fits your personality best?"; }, 3500);
    setTimeout(function() { $( '.imgA' ).fadeIn( "slow"); }, 4000);
});