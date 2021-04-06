import React from "react";
import Table from "react-bootstrap/Table";

const TransactionsComponents = ({ Money }) => {
  return (
    <div>
      {Money.map((movements, i) => {
        return (
          <Table>
            <tr key={i}>
              <td>
                <div>{Money[i].Type}</div>
              </td>
              <td colSpan="2">
                {Money[i].Date}
              </td>
              <td>{Money[i].Amount}</td>
            </tr>
          </Table>
        );
      })}
    </div>
  );
};

export default TransactionsComponents;
