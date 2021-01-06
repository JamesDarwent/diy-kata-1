const humanCatDogYears = number => {
    
    const humanToCat = (number - 2) * 4 + 24;
    const humanToDog = (number - 2) * 5 + 24;

    return [number, humanToCat, humanToDog];
};

module.exports = humanCatDogYears;
