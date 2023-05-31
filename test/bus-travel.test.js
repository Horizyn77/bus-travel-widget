describe("Bus Travel Tests", function() {
    it("should return 40 for the cost of a single trip to Khayelitsha", function() {
        const busTravel = BusTravel();

        busTravel.costPerTripSingle("Khayelitsha")
        assert.equal(40, busTravel.getCostSingleTrip())
    })

    it("should return 2 for number of trips to Mitchell's Plain with 70 points", function() {
        const busTravel = BusTravel();

        busTravel.numOfTrips(70, "Mitchell's Plain")
        assert.equal(2, busTravel.getNumOfTrips());
    })

    it("should return 31.25 as cost for peak hour travelling to Dunoon for a single trip", function() {
        const busTravel = BusTravel();

        busTravel.peakPriceSingle("Dunoon")
        assert.equal(31.25, busTravel.getPeakPriceSingle())
    })
})