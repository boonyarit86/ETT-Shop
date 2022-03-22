import React from "react";

function BankTable({ banks }) {
  return (
    <React.Fragment>
      <div className="payment__title">
        <span>การชำระเงินผ่านช่องทางโอนผ่านธนาคาร</span>
      </div>
      <table className="payment__table">
        <thead className="payment__thead">
          <tr>
            <th>ธนาคาร</th>
            <th>หมายเลขบัญชี</th>
            <th>ชื่อบัญชี</th>
            <th>สาขา</th>
            <th>ประเภทบัญชี</th>
          </tr>
        </thead>
        <tbody className="payment__tbody">
          {banks.length > 0 &&
            banks.map((bank, index) => (
              <tr key={index}>
                <td>
                  <img src={bank.logo} alt={bank.bankName} />
                  <span>{bank.bankName}</span>
                </td>
                <td>
                  <span>{bank.number}</span>
                </td>
                <td>{bank.cardholderName}</td>
                <td>{bank.branch}</td>
                <td>{bank.accountType}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default BankTable;

