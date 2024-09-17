var displayElem = document.getElementById("display")
var leadLink = document.getElementById("leadLink")

var opacityRate = 0.1
var chengingTime = 1
function Display(){
    if (displayElem.style.opacity != "1"){
        displayElem.style.opacity = Number(displayElem.style.opacity) + opacityRate;
    }else{
        leadLink.style.display = "block"
    }
    setTimeout(Display, 100);
}
setTimeout(Display, 2000);
