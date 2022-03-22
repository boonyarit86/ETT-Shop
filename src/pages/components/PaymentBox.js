import React from "react";
import "./PaymentBox.scss";

function PaymentBox({ paymentImage, contactLists, title }) {
  return (
    <div className="payment-box">
      <div className="payment-box__info">
        <div className="payment-box__contact-info">
          {contactLists.length > 0 &&
            contactLists.map((item, index) => <span key={index}>{item}</span>)}
        </div>
        <div className="payment-box__contact-info payment-box__contact-info-img">
          <img src={paymentImage} alt="payment" />
        </div>
      </div>
      <p className="payment-box__title">{title}</p>
    </div>
  );
}

export default PaymentBox;
