// declared the variable that represents how many minutes the lasagna should be in the oven

const EXPECTED_MINUTES_IN_OVEN = 40;

// declaring the function that takes the actual minutes the lasagna
// has been in the oven for as a parameter and returns how many minutes the lasagna stil lhas to remain in the oven, 
// based on the expected oven time fro previous task
function remainingMinutesInOven(actualMinutesIn) {
    return  EXPECTED_MINUTES_IN_OVEN - actualMinutesIn;
};

// adding function that takes the number of layers added to the lasagana 
// as a parameter and returns how many minutes were spent preparing the lasagna,
//assuming each layer takes 2 minutes to prepare
function preparationTimeInMinutes(layers){
    let layer = 2;
    return 2 *layers;
}

// Takes the user input from html
var numOfLayers = document.getElementById("numOfLayers").value;


function totalTimeInMinutes(numberOfLayers,actualMinutesInOven){

    return numberOfLayers * 2 + actualMinutesInOven;
}

var timeRemaining = document.getElementById("timeRemaining").innterHTML = totalTimeInMinutes;

