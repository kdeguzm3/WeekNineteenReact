import React from 'react';
import Header from './components/Header';
import EmployeeTable from './components/Table'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeTable />
    </div>
  );
}

export default App;
