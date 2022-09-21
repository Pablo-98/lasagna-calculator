// declared the variable that represents how many minutes the lasagna should be in the oven

const EXPECTED_MINUTES_IN_OVEN = 40;

// declaring the function that takes the actual minutes the lasagna
// has been in the oven for as a parameter and returns how many minutes the lasagna stil lhas to remain in the oven, 
// based on the expected oven time fro previous task
function remainingMinutesInOven(actualMinutesIn) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesIn;
}
console.log(remainingMinutesInOven(30)
);
