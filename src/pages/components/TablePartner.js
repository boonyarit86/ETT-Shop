import React from "react";
import "./TablePartner.scss";

function TablePartner({ title, partners }) {
  return (
    <div className="table-partner">
      <div className="table-partner__title">
        <span>{title}</span>
      </div>
      <table>
        <thead className="table-partner__thead">
          <tr>
            <th>ชื่อตัวแทนจำหน่าย</th>
            <th>ประเทศ</th>
            <th>จังหวัด</th>
            <th>เบอร์ติดต่อ</th>
            <th>แฟกซ์</th>
          </tr>
        </thead>
        <tbody className="table-partner__tbody">
          {partners.length > 0 &&
            partners.map((partner, index) => (
              <tr key={index}>
                <td>{partner.companyName}</td>
                <td>{partner.country}</td>
                <td>{partner.province}</td>
                <td>
                  <ul className="table-partner__phone-list">
                    {partner.phone.length > 0 &&
                      partner.phone.map((phone) => (
                        <li className="table-partner__phone" key={phone}>{phone}</li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul className="table-partner__phone-list">
                    {partner.fax.length > 0 &&
                      partner.fax.map((fax) => (
                        <li className="table-partner__phone" key={fax}>{fax}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePartner;

