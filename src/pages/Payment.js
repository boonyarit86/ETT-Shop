import React from "react";
import styled from "styled-components";
import BankTable from "./components/BankTable";
import PaymentBox from "./components/PaymentBox";

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
    <Container>
      <h2>วิธีการสั่งซื้อสินค้า</h2>
      <PaymentWrap>
        <PaymentList>1. เลือกสินค้าที่ต้องการหน้าเว็บไซต์</PaymentList>
        <PaymentList>
          2. ระบุชื่อรุ่นและจำนวนที่ต้องการ
          หลังจากนั้นส่งข้อมูลมาทางไลน์หรืออีเมล์
          <BoxWrap>
            <PaymentBox
              paymentImage="./images/line-qrcode-icon.png"
              title="Line"
              contactLists={["@etteam", "081-712-5252"]}
              theme="green"
              textColor="#000"
            />
            <PaymentBox
              paymentImage="./images/email-icon--gray.png"
              title="Email"
              contactLists={["sale@etteam.com"]}
              theme="blue"
              textColor="#fff"
            />
          </BoxWrap>
        </PaymentList>
        <PaymentList>
          3. รอ ETT ตรวจสอบสินค้า, สรุปยอดและแจ้งเลขที่บัญชีโอนเงิน
        </PaymentList>
        <PaymentList>
          4. ลูกค้าโอนเงิน,ส่งสลิป และแจ้งชื่อที่อยู่จัดส่ง
          <BankTable banks={banks} />
          <Title>
            <span>การชำระเงินผ่าน PromptPay</span>
          </Title>
          <PaymentBox
            paymentImage="./images/promptpay-qrcode-icon.png"
            title="PromptPay"
            contactLists={["PromptPay ID: 0105532007607"]}
            theme="purple"
            textColor="#fff"
          />
          <Title>
            <span>ช่องทางการส่งสำเนาการโอนเงินโดยเลือกทางใดทางหนึ่ง</span>
          </Title>
          <BoxWrap>
            <PaymentBox
              paymentImage="./images/line-qrcode-icon.png"
              title="Line"
              contactLists={["@etteam", "081-712-5252"]}
              theme="green"
              textColor="#000"
            />
            <PaymentBox
              paymentImage="./images/email-icon--gray.png"
              title="Email"
              contactLists={["sale@etteam.com"]}
              theme="blue"
              textColor="#fff"
            />
            <PaymentBox
              paymentImage="./images/fax-icon--gray.png"
              title="Fax"
              contactLists={["02-391-7216"]}
              theme="green"
              textColor="#000"
            />
            <PaymentBox
              paymentImage="./images/sms-icon--gray.png"
              title="SMS/MMS"
              contactLists={["081-712-5252"]}
              theme="blue"
              textColor="#fff"
            />
          </BoxWrap>
        </PaymentList>
        <PaymentList>5. ETT จัดส่งสินค้าให้ทางไปรษณีย์ EMS</PaymentList>
        <PaymentList>
        6. ติดตามสินค้าทางไปรษณีย์
          <a href="https://track.thailandpost.co.th/">
            Click here
          </a>
        </PaymentList>
      </PaymentWrap>
    </Container>
  );
}

export default Payment;

const Container = styled.div`
  background: #f5f5f7;
  margin: 100px auto 20px auto;
  max-width: 1128px;
  padding: 10px;
`;

const PaymentWrap = styled.ul`
  list-style: none;
  margin: 10px 0;
`;

const PaymentList = styled.li`
  margin-bottom: 5px;
  a {
      margin-left: 5px;
      text-decoration: underline;
      &:hover {
        color: blue; 
      }
  }
`;

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
  width: 100%;
`;

const Title = styled.div`
  border-bottom: 3px solid #666;
  padding: 8px 0;
  margin: 20px 0;

  span {
    padding: 10px 20px;
    background: #666;
    color: #fff;
  }
`;
