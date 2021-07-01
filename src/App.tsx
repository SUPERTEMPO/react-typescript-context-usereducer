import React, { useState } from 'react';
import './App.css';
import AddEmployeeForm from './components/AddEmployeeForm';
import TableComponent, { IDataProps } from './components/TableComponent';
import data from './data/people';
function App() {
  const [tableData, setTableData] = useState<IDataProps['data']>(data)
  const handleDelete = (id: number):void =>{
    setTableData(prev => prev.filter(d  => d.id !== id))
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <TableComponent data={tableData} deleteData={handleDelete} />
        </div>
        <div className="card">
          <AddEmployeeForm setTableData={setTableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
