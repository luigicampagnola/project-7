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
                <div className="depo p-1">{Money[i].Type}</div>
              </td>
              <td className="p-3 App" colSpan="2">
                {Money[i].Date}
              </td>
              <td className="p-3">{Money[i].Amount}</td>
            </tr>
          </Table>
        );
      })}
    </div>
  );
};

export default TransactionsComponents;
