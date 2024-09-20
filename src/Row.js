import React, { useState } from 'react';

function Row({ row}) {
  const [input, setInput] = useState('');

  const handlePercentageClick = () => {
    
  };

  const handleValueClick = () => {
    
  };

  return (
    <>
      <tr>
        <td >{row.label}</td>
        <td>{row.value}</td>
        <td>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </td>
        <td>
          <button onClick={handlePercentageClick}>Allocation %</button>
        </td>
        <td>
          <button onClick={handleValueClick}>Allocation Value</button>
        </td>
        <td>{row.variance ? row.variance.toFixed(2) : '0'}%</td>
      </tr>
      {row.children &&
        row.children.map((child) => (
          <Row key={child.id} row={child} />
        ))}
    </>
  );
}

export default Row;