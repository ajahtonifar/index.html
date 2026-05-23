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

/* working on the decrement and increment function*/

let count = 0;

const number = document.getElementById("number");

const saveEl = document.getElementById("save");

/* Increment */

function increment() {

    count++;

    number.textContent = count;
}

/* Decrement */

function decrement() {

    if(count > 0){

        count--;

        number.textContent = count;
    }
}

/* Save */

function saveEntry() {

    let savedNumber = count + " - ";

    saveEl.textContent += savedNumber;

    count = 0;

    number.textContent = count;
}