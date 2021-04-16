import React from "react";
import Table from "react-bootstrap/Table";
import "./TableComponent.css";

const TableComponent = ({ Money }) => {
  const renderMovements = (Money, i) => {
    return (
      <tr key={i}>
        <td className="p-3">
          <div className="depo p-1">{Money.Type}</div>
        </td>
        <td className="p-3 App" colSpan="2">
          {Money.Date}
        </td>
        <td className="p-3 App">{Money.Amount}</td>
      </tr>
    );
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="p-2 App">Transaction</th>
            <th className="p-2 App" colSpan="2">
              Date
            </th>
            <th className="p-2 App">Amount</th>
          </tr>
        </thead>
        <tbody>{Money.map(renderMovements)}</tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
