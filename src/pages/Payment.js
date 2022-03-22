import React from "react";
import BankTable from "./components/BankTable";
import PaymentBox from "./components/PaymentBox";
import "./Payment.scss";

function Payment() {
  let banks = [
    {
      bankName: "SCB ธนาคารไทยพาณิชย์ จำกัด (มหาชน)",
      number: "035-3-02937-1",
      cardholderName: "บริษัท อีทีที จำกัด",
      branch: "สุขุมวิท 71",
      accountType: "กระแสรายวัน",
      logo: "./images/scb-logo.png",
    },
    {
      bankName: "K-BANK ธนาคารกสิกรไทย จำกัด (มหาชน)",
      number: "010-2-83284-1",
      cardholderName: "บริษัท อีทีที จำกัด",
      branch: "พระโขนง",
      accountType: "ออมทรัพย์",
      logo: "./images/kbank-logo.png",
    },
    {
      bankName: "KTB ธนาคารกรุงไทย จำกัด (มหาชน)",
      number: "161-0-04754-0",
      cardholderName: "บริษัท อีทีที จำกัด",
      branch: "พระโขนง",
      accountType: "ออมทรัพย์",
      logo: "./images/ktb-logo.jpg",
    },
    {
      bankName: "BBL ธนาคารกรุงเทพ จำกัด (มหาชน)",
      number: "157-4-78808-7",
      cardholderName: "บริษัท อีทีที จำกัด",
      branch: "พระโขนง",
      accountType: "ออมทรัพย์",
      logo: "./images/bbl-logo.jpg",
    },
  ];

  return (
    <div className="payment">
      <div className="row">
        <h2 className="payment__heading">วิธีการสั่งซื้อสินค้า</h2>
        <ul className="payment__list">
          <li className="payment__item">1. เลือกสินค้าที่ต้องการหน้าเว็บไซต์</li>
          <li className="payment__item">
            2. ระบุชื่อรุ่นและจำนวนที่ต้องการ
            หลังจากนั้นส่งข้อมูลมาทางไลน์หรืออีเมล์
            <div className="payment__item-container">
              <PaymentBox
                paymentImage="./images/line-qrcode-icon.png"
                title="Line"
                contactLists={["@etteam", "081-712-5252"]}
              />
              <PaymentBox
                paymentImage="./images/email-icon--gray.png"
                title="Email"
                contactLists={["sale@etteam.com"]}
              />
            </div>
          </li>
          <li className="payment__item">
            3. รอ ETT ตรวจสอบสินค้า, สรุปยอดและแจ้งเลขที่บัญชีโอนเงิน
          </li>
          <li className="payment__item">
            4. ลูกค้าโอนเงิน,ส่งสลิป และแจ้งชื่อที่อยู่จัดส่ง
            <BankTable banks={banks} />
            <div className="payment__title">
              <span>การชำระเงินผ่าน PromptPay</span>
            </div>
            <PaymentBox
              paymentImage="./images/promptpay-qrcode-icon.png"
              title="PromptPay"
              contactLists={["PromptPay ID: 0105532007607"]}
            />
            <div className="payment__title">
              <span>ช่องทางการส่งสำเนาการโอนเงินโดยเลือกทางใดทางหนึ่ง</span>
            </div>
            <div className="payment__item-container">
              <PaymentBox
                paymentImage="./images/line-qrcode-icon.png"
                title="Line"
                contactLists={["@etteam", "081-712-5252"]}
              />
              <PaymentBox
                paymentImage="./images/email-icon--gray.png"
                title="Email"
                contactLists={["sale@etteam.com"]}
              />
              <PaymentBox
                paymentImage="./images/fax-icon--gray.png"
                title="Fax"
                contactLists={["02-391-7216"]}
              />
              <PaymentBox
                paymentImage="./images/sms-icon--gray.png"
                title="SMS/MMS"
                contactLists={["081-712-5252"]}
              />
            </div>
          </li>
          <li className="payment__item">5. ETT จัดส่งสินค้าให้ทางไปรษณีย์ EMS</li>
          <li className="payment__item">
            6. ติดตามสินค้าทางไปรษณีย์
            <a href="https://track.thailandpost.co.th/">Click here</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Payment;

