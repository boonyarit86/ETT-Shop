import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="footer__container">
          <div className="footer__item">
            <p className="footer__menu--font-white">ศูนย์ให้ความช่วยเหลือ</p>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <Link className="footer__menu-link" to="/payment">
                  การชำระเงิน
                </Link>
              </li>
              <li className="footer__menu-item">สินค้าจากต่างประเทศ</li>
            </ul>
          </div>

          <div className="footer__item">
            <p className="footer__menu--font-white">เกี่ยวกับ ETT</p>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <Link className="footer__menu-link" to="/about">
                  ประวัติ ETT
                </Link>
              </li>
              <li className="footer__menu-item">บทความ</li>
              <li className="footer__menu-item">
                <Link className="footer__menu-link" to="/partner">
                  ตัวแทนจำหน่าย
                </Link>
              </li>
              <li className="footer__menu-item">ดาวน์โหลด</li>
            </ul>
          </div>

          <div className="footer__item">
            <Link
              className="footer__menu-link footer__menu--font-white"
              to="/contact"
              style={{padding: 0}}
            >
              ข้อมูลติดต่อ
            </Link>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                1112/96-98 ถ.สุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพ 10110
              </li>
              <li className="footer__menu-item">
                <p className="footer__menu--font-white">โทร:</p>02-712-1120
              </li>
              <li className="footer__menu-item">
                <p className="footer__menu--font-white">แฟกซ์:</p>02-391-7216
              </li>
              <li className="footer__menu-item">
                <div className="footer__social-link">
                  <a
                    className="footer__social-icon-box"
                    href="https://m.facebook.com/ett.co.th"
                  >
                    <img
                      className="footer__social-icon"
                      src="/images/facebook-icon--white.png"
                      alt="facebook icon"
                    />
                  </a>
                  <a className="footer__social-icon-box" href="">
                    <img
                      className="footer__social-icon"
                      src="/images/line-icon--white.png"
                      alt="line icon"
                    />
                  </a>
                  <a
                    className="footer__social-icon-box"
                    href="mailto: sale@etteam.com"
                  >
                    <img
                      className="footer__social-icon"
                      src="/images/email-icon--white.png"
                      alt="email icon"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Copyright © 2000 - 2021 by ETT Co.,Ltd, Powered by{" "}
            <a className="footer__copyright-link" href="suntechnet.com">
              suntechnet.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;