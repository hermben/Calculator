var els = document.getElementsByClassName("grid-item");
var screen = document.getElementById("screen");
var equalSign = document.getElementById("equal-sign");
var clear = document.getElementById("AC");

var valueEntered = function() {
    let btnValue = this.getAttribute("data-value");
    
    if (screen.value == 0) {
        screen.value = btnValue;
    } else {
        screen.value += btnValue;
    }
};

for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', valueEntered, false);
}

equalSign.addEventListener('click', function(e) {
    screen.value = eval(screen.value);
}, false);
clear.addEventListener('click',function(e){

screen.value= '0';

})
