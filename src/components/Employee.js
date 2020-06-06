import React from 'react';

const Employee = ({ Name, Bending, Organization }) => {
    const benderString = Bending.join(", ");
    return (
        <div className = "Employee">
            <h1 className = "namePlate"> {Name} </h1> <span className = "Org"> [ {Organization.toUpperCase()} ] </span>
            <p> {benderString} </p>
        </div>
    )

};

export default Employee;