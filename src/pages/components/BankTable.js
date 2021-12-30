import React from "react";
import styled from "styled-components";

function BankTable({ banks }) {
  return (
    <div>
      <Title>
        <span>การชำระเงินผ่านช่องทางโอนผ่านธนาคาร</span>
      </Title>
      <Table>
        <Thead>
          <tr>
            <th>ธนาคาร</th>
            <th>หมายเลขบัญชี</th>
            <th>ชื่อบัญชี</th>
            <th>สาขา</th>
            <th>ประเภทบัญชี</th>
          </tr>
        </Thead>
        <Tbody>
          {banks.length > 0 &&
            banks.map((bank, index) => (
              <tr key={index}>
                <td>
                  <img src={bank.logo} />
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
        </Tbody>
      </Table>
    </div>
  );
}

export default BankTable;

const Title = styled.div`
  border-bottom: 3px solid #666;
  padding: 8px 0;
  margin: 10px 0;

  span {
    padding: 10px 20px;
    background: #666;
    color: #fff;
  }
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
`;

const Thead = styled.thead`
  tr {
    display: flex;
    flex-wrap: wrap;
  }
  th {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    color: #000;
    font-size: 18px;
  }

  th:first-child {
    @media (max-width: 500px) {
      text-align: center;
    }
  }

  th:nth-child(4),
  th:last-child {
    flex: 1;
  }

  th:first-child,
  th:nth-child(2),
  th:nth-child(3) {
    flex: 2;
  }
  th:last-child {
    border-right: none;
  }
`;

const Tbody = styled.tbody`
  tr {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
  }
  td {
    padding: 8px;
    text-align: left;
    border-right: 1px solid #ccc;
  }

  td:first-child {
    display: flex;
    img {
      margin: 3px 5px 0 0;
      width: 28px;
      height: 28px;
    }

    @media (max-width: 500px) {
      span {
        display: none;
      }
      justify-content: center;
    }
  }

  td:nth-child(4),
  td:last-child {
    flex: 1;
  }

  td:first-child,
  td:nth-child(2),
  td:nth-child(3) {
    flex: 2;
  }

  td:last-child {
    border-right: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  @media (max-width: 500px) {
    td:nth-child(2) {
      /* span {
            width: 80px;
        } */
      overflow: scroll;
      /* border: 1px solid red; */
    }
  }
`;
