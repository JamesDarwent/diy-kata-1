const getEmployerRole = (employeeName, employees) => {

    let roles;

    employees.map(element => {
        if(employeeName === element.name){
        roles = element.role 
    }});
        
    return roles;
};

module.exports = getEmployerRole;
