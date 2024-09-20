import React from 'react';
import Row from './Row';

function Table({ data}) {
  const calculateSubtotal = (row) => {
    if (row.children) {
      return row.children.reduce((sum, child) => sum + child.value, 0);
    }
    return row.value;
  };

  const calculateGrandTotal = () => {
    return data.reduce((sum, row) => sum + calculateSubtotal(row), 0);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Input</th>
          <th>Allocation %</th>
          <th>Allocation Value</th>
          <th>Variance %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <Row key={row.id} row={row} />
        ))}
        <tr>
          <td><strong>Grand Total</strong></td>
          <td>{calculateGrandTotal()}</td>
          <td colSpan="4"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;