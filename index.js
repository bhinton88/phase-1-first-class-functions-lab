// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2); 
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers,  returnLastTwoDrivers]; 

// the brief asked us to create a function that returned a FUNCTION, NOT a value. Where
// the function returned a function that multiplied our fare by a given mulitiplier (i.e fare * 4)

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier;
    }
}

// these functions below were then assigned to the function returned out of the above function, 
// and then run with a value inserted for fare 

const fareDoubler = createFareMultiplier(2); // fareDoubler = function(fare) { return fare * 2 }

// I.e. we assign 2 as our MULTIPLIER, then the test file passes an argument of 10 as the FARE,
// which should then return a value of 20 for fare doubler 

const fareTripler = createFareMultiplier(3); // fareTripler = function(fare) { return fare * 3 }

// here again we are doing the same things just tripling the fare rather than double 

function selectDifferentDrivers(drivers , callback) {
    return callback(drivers); 
} 

// 