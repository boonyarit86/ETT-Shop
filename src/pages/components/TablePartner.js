import React from "react";
import styled from "styled-components";

function TablePartner({ title, partners }) {
  return (
    <div>
      <Title>
        <span>{title}</span>
      </Title>
      <Table>
        <Thead>
          <tr>
            <th>ชื่อตัวแทนจำหน่าย</th>
            <th>ประเทศ</th>
            <th>จังหวัด</th>
            <th>เบอร์ติดต่อ</th>
            <th>แฟกซ์</th>
          </tr>
        </Thead>
        <Tbody>
          {partners.length > 0 &&
            partners.map((partner, index) => (
              <tr key={index}>
                <td>{partner.companyName}</td>
                <td>{partner.country}</td>
                <td>{partner.province}</td>
                <td>
                  <ContactWrap>
                    {partner.phone.length > 0 &&
                      partner.phone.map((phone) => (
                        <ContactList key={phone}>{phone}</ContactList>
                      ))}
                  </ContactWrap>
                </td>
                <td>
                  <ContactWrap>
                    {partner.fax.length > 0 &&
                      partner.fax.map((fax) => (
                        <ContactList key={fax}>{fax}</ContactList>
                      ))}
                  </ContactWrap>
                </td>
              </tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default TablePartner;

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
`;

const Thead = styled.thead`
  tr {
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
  }
  th {
    padding: 8px;
    text-align: left;
    color: #002ead;
    font-size: 18px;
  }

  th:first-child {
    color: #1a1a1a;
  }

  th:first-child,
  th:nth-child(4),
  th:last-child {
    flex: 2;
  }

  th:nth-child(2),
  th:nth-child(3) {
    flex: 1;
  }
`;

const Tbody = styled.tbody`
  tr {
    display: flex;
    flex-wrap: wrap;
  }
  td {
    padding: 8px;
    text-align: left;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  td:first-child {
    color: #1a1a1a;
    font-weight: 500;
  }

  td:last-child {
    border: none;
  }

  tr:nth-child(even) {
    background: #f2f2f2;
  }

  tr:hover {
    background: #ddd;
  }

  td:first-child,
  td:nth-child(4),
  td:last-child {
    flex: 2;
  }

  td:nth-child(2),
  td:nth-child(3) {
    flex: 1;
  }

  @media(max-width: 500px) {
    td:first-child {
        width: 80px;
        overflow: scroll;
  }
  }
`;

const ContactWrap = styled.ul`
  list-style: none;
`;

const ContactList = styled.li`
  margin-bottom: 5px;
`;
