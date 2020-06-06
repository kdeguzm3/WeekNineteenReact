import React, { useState } from 'react';

const Options = ({query, setQuery, sort, setSort, handleSubmit, queryType, setQueryType}) => {
    const [collapse, setCollapse] = useState (true)


return (
    <div className = "optionsDiv">
        <div className = "optionsTab" onClick = {() => setCollapse(!collapse)}> FILTER/SORT {collapse ? "" : "[X]"} </div>
        <div className = {collapse ? "optionsForm collapsed" : "optionsForm"}><hr></hr>
        <br />
        <input type = "text" value = {query} onChange = {(e) => setQuery(e.target.value) }></input>
        <br />
        <label>FIND BY:</label> <br /> 
        <select value = {queryType} onChange = {(e) => setQueryType (e.target.value)}>
            <option value = "Name"> Name </option>
            <option value = "Bending"> Bending </option>
            <option value = "Organization"> Organization </option>
        </select>
        <br /><br /><br />
        <label> SORT:</label><br></br>
        <input type = "radio" name = "sorting" value = "Name" checked = {sort === "Name" ? true : false} onChange = {(e) => setSort(e.target.value)}></input> By Name <br></br>
        <input type = "radio" name = "sorting" value = "Organization" checked = {sort === "Organization" ? true : false} onChange = {(e) => setSort(e.target.value)}></input> By Organization <br></br>
        <button onClick = {handleSubmit}>Submit</button>
        </div> 
    </div>
)
};

export default Options;