import React from "react";
import Table from "react-bootstrap/Table";
import Scroll from "../Scroll/Scroll";
import "./TableComponent.css";

const TableComponent = ({ movementsT }) => {
  const colorType = (movement) => {
    let colorClass = "p-1 ";
    if (movement.Type === "Deposit") {
      colorClass += "depo";
    } else if (movement.Type === "Withdrawal") {
      colorClass += "wit";
    }
    return colorClass;
  };

  const renderMovements = (movementsT, i) => {
    return (
      <tr key={i}>
        <td className="p-3">
          <div className={colorType(movementsT)}>{movementsT.Type}</div>
        </td>
        <td className="p-3 App" colSpan="2">
          {movementsT.Date}
        </td>
        <td className="p-3 App">{movementsT.Amount}</td>
      </tr>
    );
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
          <tbody>{movementsT.map(renderMovements)}</tbody>
        </Table>
      </Scroll>
    </div>
  );
};

export default TableComponent;
