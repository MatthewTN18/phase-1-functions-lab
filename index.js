// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42)
    {return pickupLocation - 42}
    else if (pickupLocation < 42)
    return 42 - pickupLocation
}

distanceFromHqInFeet = function() {
return distanceFromHqInBlocks * 264
}

