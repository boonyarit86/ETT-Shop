import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="contact__info">
          <h2 className="contact__title">
            ข้อมูลติดต่อ <span></span>
          </h2>
          <div className="contact__list">
            <img src="./images/address-icon--gray.png" alt="" />
            <span>
              1112/96-98 ถ.สุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพ 10110
            </span>
          </div>
          <div className="contact__list">
            <img src="./images/calendar-icon--gray.png" alt="" />
            <span>วันจันทร์ - วันศุกร์</span>
          </div>
          <div className="contact__list">
            <img src="./images/clock-icon--gray.png" alt="" />
            <span>09.00 - 17.00 น.</span>
          </div>
          <div className="contact__list">
            <img src="./images/phone-icon--gray.png" alt="" />
            <span>02-712-1120</span>
          </div>
          <div className="contact__list">
            <img src="./images/fax-icon--gray.png" alt="" />
            <span>02-391-7216</span>
          </div>
          <div className="contact__list">
            <img src="./images/line-icon--gray.png" alt="" />
            <span>08-1712-5252</span>
          </div>
          <div className="contact__list">
            <img src="./images/facebook-icon--gray.png" alt="" />
            <a href="https://m.facebook.com/ett.co.th">Etteam</a>
          </div>
          <div className="contact__list">
            <img src="./images/email-icon--gray.png" alt="" />
            <span>sale@etteam.com</span>
          </div>
        </div>

        <div className="contact__info">
          <h2 className="contact__title">
            แผนที่การเดินทาง <span></span>
          </h2>
          <div className="contact__map-container">
            <iframe
              className="contact__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31010.635861257648!2d100.5962471220557!3d13.698483784435894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fee89cda1ed%3A0x59665e574efa6aa7!2z4Lit4Li14LiX4Li14LiX4Li1!5e0!3m2!1sth!2sth!4v1640602141857!5m2!1sth!2sth"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact__img-map">
            <img src="./images/ett-map.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
