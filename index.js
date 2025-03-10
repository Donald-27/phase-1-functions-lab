// Code your solution in this file!
// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Scuber's HQ is on 42nd Street
    return Math.abs(someValue - hqLocation);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance traveled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25
    } else {
        return 'cannot travel that far'; // Over 2500 feet not allowed
    }
}

// Export functions for testing
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
