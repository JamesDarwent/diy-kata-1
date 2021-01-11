const getEmployerRole = (employeeName, employees) => {

    let roles;

    employees.map(element => {
        if(employeeName === element.name){
        roles = element.role 
    }});
        
    return roles !== undefined? roles : "No longer works here";
};

module.exports = getEmployerRole;
