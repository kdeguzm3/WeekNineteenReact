import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import EmployeeData from '../data/employees.json';
import Options from './Options';

const EmployeeTable = () => {

return (
    <div>
        <div className = "Table">
            {
                EmployeeData.map(
                    (data, index) => {
                        return <Employee {...data} key = {index} />
                    }
                )
            }

        </div>
        <Options />
    </div>
)
};

export default EmployeeTable;