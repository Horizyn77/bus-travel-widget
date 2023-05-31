const points = document.querySelector("#points");
const locationFrom = document.querySelector("#location");
const returnTrip = document.querySelector("#returnTrip")
const calculateBtn = document.querySelector("#calculateBtn");
const numSingleTrips = document.querySelector("#numSingleTrips");
const pricePerSingle = document.querySelector("#pricePerSingle");
const numReturnTrips = document.querySelector("#numReturnTrips");
const pricePerReturn = document.querySelector("#pricePerReturn");
const checkBox = document.querySelector("input[type='checkbox']")

const busTravel = BusTravel();

function displayCalculation() {
    const times = document.querySelector("input[name='times']:checked")
    //checking if the drop down selected equals a particular location, take
    //the value of that selected item and pass it into the factory function that
    //calculates single trips, then update the dom to display the return value
    //from the result coming from the factory function

    //then calculating num of trips by getting the points inputed and location
    //selected and passing in those values to the factory function numOfTrips
    //that calculates how many trips can be made, and updated the dom with the
    //return value that comes from the factory function calculations

    if(times && times.value === "off-peak") {

        if(locationFrom.value === "Khayelitsha") {
            busTravel.costPerTripSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getCostSingleTrip();
            busTravel.numOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getNumOfTrips();
        } else if (locationFrom.value === "Dunoon") {
            busTravel.costPerTripSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getCostSingleTrip();
            busTravel.numOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getNumOfTrips();
        } else if (locationFrom.value === "Mitchell's Plain") {
            busTravel.costPerTripSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getCostSingleTrip();
            busTravel.numOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getNumOfTrips();
        }
        
        if (returnTrip.checked) {
            busTravel.costPerTripReturn(locationFrom.value);
            pricePerReturn.innerText = busTravel.getCostReturnTrip();
            busTravel.numOfReturnTrips(points.value, locationFrom.value);
            numReturnTrips.innerText = busTravel.getNumOfReturnTrips();
        }
    }
    if (times && times.value === "peak" && !returnTrip.checked) {
        if(locationFrom.value === "Khayelitsha") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
        } else if (locationFrom.value === "Dunoon") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
        } else if (locationFrom.value === "Mitchell's Plain") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
        }
    } else if (times && times.value === "peak" && returnTrip.checked) {
        if(locationFrom.value === "Khayelitsha") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
            busTravel.peakPriceReturn(locationFrom.value);
            pricePerReturn.innerText = busTravel.getPeakPriceReturn();
            busTravel.peakNumOfReturnTrips(points.value, locationFrom.value);
            numReturnTrips.innerText = busTravel.getPeakNumOfReturnTrips();
        } else if (locationFrom.value === "Dunoon") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
            busTravel.peakPriceReturn(locationFrom.value);
            pricePerReturn.innerText = busTravel.getPeakPriceReturn();
            busTravel.peakNumOfReturnTrips(points.value, locationFrom.value);
            numReturnTrips.innerText = busTravel.getPeakNumOfReturnTrips();
        } else if (locationFrom.value === "Mitchell's Plain") {
            busTravel.peakPriceSingle(locationFrom.value);
            pricePerSingle.innerText = busTravel.getPeakPriceSingle();
            busTravel.peakNumOfTrips(points.value, locationFrom.value);
            numSingleTrips.innerText = busTravel.getPeakNumOfTrips();
            busTravel.peakPriceReturn(locationFrom.value);
            pricePerReturn.innerText = busTravel.getPeakPriceReturn();
            busTravel.peakNumOfReturnTrips(points.value, locationFrom.value);
            numReturnTrips.innerText = busTravel.getPeakNumOfReturnTrips();
        }
    }



}

calculateBtn.addEventListener("click", displayCalculation)
checkBox.addEventListener("change", () => {
    if(!checkBox.checked) {
        pricePerReturn.style.display = "none";
        numReturnTrips.style.display = "none";
    } else {
        pricePerReturn.style.display = "inline";
        numReturnTrips.style.display = "inline";
    }
})