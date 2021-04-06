import React from "react";
import Table from "react-bootstrap/Table";
import "./Transactions.css";

const Transactions = ({ Money }) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="p-2">Transaction</th>
            <th className="p-2" colSpan="2">
              Date
            </th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <div className="depo p-1">{Money[0].Type}</div>
            </td>
            <td className="p-3 App" colSpan="2">
              {Money[0].Date}
            </td>
            <td className="p-3">{Money[0].Amount}</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="wit p-1">Withdrawal</div>
            </td>
            <td className="p-3 App" colSpan="2">
              02/06/2021
            </td>
            <td className="p-3">10,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              03/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              01/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="wit p-1">Withdrawal</div>
            </td>
            <td className="p-3 App" colSpan="2">
              02/06/2021
            </td>
            <td className="p-3">10,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              03/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              03/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              01/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="wit p-1">Withdrawal</div>
            </td>
            <td className="p-3 App" colSpan="2">
              02/06/2021
            </td>
            <td className="p-3">10,000</td>
          </tr>
          <tr>
            <td className="p-3">
              <div className="depo p-1">Deposit</div>
            </td>
            <td className="p-3 App" colSpan="2">
              03/06/2021
            </td>
            <td className="p-3">5,000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Transactions;
