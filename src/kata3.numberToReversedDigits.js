const numberToReversedDigits = number => {
    return number.toString().split('').reverse().map(element => parseInt(element));
};

module.exports = numberToReversedDigits;
