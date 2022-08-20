// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
    return [drivers[0],
            drivers[1]];
}

const returnLastTwoDrivers= function(drivers){
    return [drivers[drivers.length-2],
            drivers[drivers.length-1]];
}
let selectingDrivers=[returnFirstTwoDrivers,
                    returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(fare){
        return fare*number};
}

const fareDoubler=function(createFareMultiplier){
    return createFareMultiplier*2;
}

const fareTripler=function(createFareMultiplier){
    return createFareMultiplier*3;
}

function selectDifferentDrivers(drivers,choice){
    return choice===returnFirstTwoDrivers?(returnFirstTwoDrivers(drivers)):(returnLastTwoDrivers(drivers));

}