/* Select bulb */

let bulb =
document.getElementById("bulb");

/* Turn ON Function */

function turnOn(){

    bulb.classList.add("on");
}

/* Turn OFF Function */

function turnOff(){

    bulb.classList.remove("on");
}