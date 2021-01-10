const joinNames = namesObj => {

    let allNames;

    const arrayOfNames = namesObj.map(element => element.name);

    if (arrayOfNames.length === 1) {
        allNames = arrayOfNames[0];
    }

    else if (arrayOfNames.length === 2) {
        allNames = `${arrayOfNames[0]} & ${arrayOfNames[1]}`;
    }
    
    else if (arrayOfNames.length > 2) {
        allNames = `${arrayOfNames.slice(0, -1).join(', ')} & ${arrayOfNames.slice(-1)}`;
    }

    return allNames;
};

module.exports = joinNames;
