import React, { useState } from 'react';
import Employee from './Employee';
import EmployeeData from '../data/employees.json';
import Options from './Options';

const EmployeeTable = () => {

    const [query, setQuery] = useState("(All)");
    const [queryType, setQueryType] = useState("Name");
    const [sort, setSort] = useState("name");
    const [arrayResult, setArrayResult] = useState (EmployeeData);


    const handleSubmit = () => {
        let tempArray = EmployeeData;
        tempArray = tempArray.filter((element) => {
            if (query === "(All)" || element[queryType].includes(query)) {
                return true; 
            } else {return false}
        })
        tempArray.sort ((a,b) => a[sort] > b[sort] ? 1 : -1
        )
        console.log(tempArray);

        setArrayResult (tempArray)
    };

return (
    <div>
        <div className = "Table">
            {
                arrayResult.map(
                    (data, index) => {
                        return <Employee {...data} key = {index} />
                    }
                )
            }

        </div>
        <Options query = {query} setQuery = {setQuery} sort = {sort} setSort = {setSort} handleSubmit = {handleSubmit} queryType = {queryType} setQueryType = {setQueryType}/>
    </div>
)
};

export default EmployeeTable;