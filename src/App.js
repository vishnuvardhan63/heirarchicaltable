import React, { useState } from 'react';
import './App.css';
import Table from './Table';

const initialData = [
  {
    id: "electronics",
    label: "Electronics",
    value: 1500,
    children: [
      { id: "phones", label: "Phones", value: 800 },
      { id: "laptops", label: "Laptops", value: 700 }
    ]
  },
  {
    id: "furniture",
    label: "Furniture",
    value: 1000,
    children: [
      { id: "tables", label: "Tables", value: 300 },
      { id: "chairs", label: "Chairs", value: 700 }
    ]
  }
];

function App() {
  const [data, setData] = useState(initialData);
  
  return (
    <div className="App">
      <h1>Hierarchical Table</h1>
      <Table data={data} />
    </div>
  );
}

export default App;