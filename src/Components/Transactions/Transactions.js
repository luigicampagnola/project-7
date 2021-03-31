import React from "react";
import Table from "react-bootstrap/Table";

const Transactions = () => {
  return (
    <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Transaction</th>
              <th colSpan="2">Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deposit</td>
              <td colSpan='2'>01/06/2021</td>
              <td>5,000</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td colSpan='2'>02/06/2021</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td colSpan='2'>03/06/2021</td>
              <td>5,000</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td colSpan='2'>01/06/2021</td>
              <td>5,000</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td colSpan='2'>02/06/2021</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td colSpan='2'>03/06/2021</td>
              <td>5,000</td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
};

export default Transactions;
