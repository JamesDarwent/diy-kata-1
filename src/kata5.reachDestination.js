const reachDestination = (distance, speed) => {
    
    const time = (distance / speed);
    const eta = Math.round(time / 0.5) * 0.5;

    return `I should be there in ${eta} hours`;
};


module.exports = reachDestination;
