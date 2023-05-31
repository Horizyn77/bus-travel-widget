function BusTravel() {

    // object that stores the destination and fares
    const destinationFares = {
        "Khayelitsha": {
            single: 40,
            return: 80,
            peak: 50,
            peakReturn: 100
        },
        "Dunoon": {
            single: 25,
            return: 50,
            peak: 31.25,
            peakReturn: 62.5
        },
        "Mitchell's Plain": {
            single: 30,
            return: 60,
            peak: 37.5,
            peakReturn: 75
        }
    }

    let costSingle = 0;
    let numOfTripsMake = 0;
    let peakSingleCost = 0;
    let peakNumOfTripsMake = 0;
    let costReturn = 0;
    let numOfReturnTripsMake = 0;
    let peakNumOfReturnTripsMake = 0;
    let peakReturnCost = 0;
    //function that calculates the cost trip for single using the location parameter
    //it checks if the value passed in matches the value that is in the loop that
    //goes through the fares object, then it sets the cost to that fare
    function costPerTripSingle(location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                costSingle = destinationFares[loc]["single"];
            }
        }
    }
    //function that gets the cost per single trip
    //it returns the result of the single trip calculation done in costPerTripSingle
    function getCostSingleTrip() {
        return costSingle;
    }

    //function that calculates the number of trips that can be made using
    //two parameters points and location. It loops through the destination fares object
    // and checks if the location is equal to the item in the iteration, then it 
    //sets the numOfTripsMake variable to the item in the fares objects divided
    //by the points and then it cuts off the decimal point using Math.trunc
    function numOfTrips(points, location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                numOfTripsMake = points / destinationFares[loc]["single"];
                numOfTripsMake = Math.trunc(numOfTripsMake);
            }
        }
    }
    //function that gets the number of trips that can be made
    function getNumOfTrips() {
        return numOfTripsMake;
    }

    function peakPriceSingle(location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                peakSingleCost = destinationFares[loc]["peak"];
            }
        }
    }

    function getPeakPriceSingle() {
        return peakSingleCost;
    }

    function peakNumOfTrips(points, location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                peakNumOfTripsMake = points / destinationFares[loc]["peak"];
                peakNumOfTripsMake = Math.trunc(peakNumOfTripsMake);
            }
        }
    }

    function getPeakNumOfTrips() {
        return peakNumOfTripsMake;
    }

    function costPerTripReturn(location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                costReturn = destinationFares[loc]["return"];
            }
        }
    }

    function getCostReturnTrip() {
        return costReturn;
    }

    function numOfReturnTrips(points, location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                numOfReturnTripsMake = points / destinationFares[loc]["return"];
                numOfReturnTripsMake = Math.trunc(numOfReturnTripsMake);
            }
        }
    }

    function getNumOfReturnTrips() {
        return numOfReturnTripsMake;
    }

    function peakPriceReturn(location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                peakReturnCost = destinationFares[loc]["peakReturn"];
            }
        }
    }

    function getPeakPriceReturn() {
        return peakReturnCost;
    }

    function peakNumOfReturnTrips(points, location) {
        for (let loc in destinationFares) {
            if (location === loc) {
                peakNumOfReturnTripsMake = points / destinationFares[loc]["peakReturn"];
                peakNumOfReturnTripsMake = Math.trunc(peakNumOfReturnTripsMake);
            }
        }
    }

    function getPeakNumOfReturnTrips() {
        return peakNumOfReturnTripsMake;
    }


    return {
        costPerTripSingle,
        getCostSingleTrip,
        numOfTrips,
        getNumOfTrips,
        peakPriceSingle,
        getPeakPriceSingle,
        peakNumOfTrips,
        getPeakNumOfTrips,
        costPerTripReturn,
        getCostReturnTrip,
        numOfReturnTrips,
        getNumOfReturnTrips,
        peakNumOfReturnTrips,
        getPeakNumOfReturnTrips,
        peakPriceReturn,
        getPeakPriceReturn
    }
}