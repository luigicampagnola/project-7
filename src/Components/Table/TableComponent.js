import React from "react";
import Table from "react-bootstrap/Table";
import Scroll from "../Scroll/Scroll";
import "./TableComponent.css";

const TableComponent = ({ movementsTable }) => {
  /* need to add conditioning to not render anything if 
    if amount is = 0
  */

  const colorType = (movement) => {
    let colorClass = "p-1 ";
    if (movement.type === "Deposit") {
      colorClass += "depo";
    } else if (movement.type === "Withdrawal") {
      colorClass += "wit";
    }
    return colorClass;
  };

  const renderMovements = (movementsTable, i) => {
    if (
      movementsTable.type === "Deposit" ||
      movementsTable.type === "Withdrawal"
    ) {
      return (
        <tr key={i}>
          <td className="p-3">
            <div className={colorType(movementsTable)}>
              {movementsTable.type}
            </div>
          </td>
          <td className="p-3 App" colSpan="2">
            {movementsTable.date}
          </td>
          <td className="p-3 App">{movementsTable.amount}</td>
        </tr>
      );
    }
  };

  return (
    <div>
      <Scroll>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="p-2 App sticky">Transaction</th>
              <th className="p-2 App sticky" colSpan="2">
                Date
              </th>
              <th className="p-2 App sticky">Amount</th>
            </tr>
          </thead>
          <tbody>{movementsTable.map(renderMovements)}</tbody>
        </Table>
      </Scroll>
    </div>
  );
};

export default TableComponent;
