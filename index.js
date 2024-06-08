var House = /** @class */ (function () {
    function House(numberOfDoors, numberOfWindows, houseNumber, ownerName) {
        this.ownerName = "samad";
        this.numberOfDoors = numberOfDoors;
        this.numberOfWindows = numberOfWindows;
        this.houseNumber = houseNumber;
        this.ownerName = ownerName;
    }
    return House;
}());
var house = new House(3, 5, 12, "John");
var house2 = new House(3, 5, 12, "Jsamad");
console.log(house2);
