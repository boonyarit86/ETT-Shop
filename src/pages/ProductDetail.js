import React from "react";
import NavigationSlide from "./components/NavigationSlide";
import ShowProductDetail from "./components/ShowProductDetail";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="product-detail">
      <div className="row">
        <div className="product-detail__container">
          <div className="product-detail__header">
            <div className="product-detail__name">
              <span>New</span>
              <p>Yahari Book</p>
            </div>
            <div className="product-detail__price">
              <span>50 Bath</span>
            </div>
          </div>

          <div className="product-detail__display-img">
            <NavigationSlide />
          </div>
        </div>

        {/* ---   Product Detail   --- */}
        <div className="product-detail__container">
          <div className="product-detail__title">
            <p>รายละเอียดสินค้า</p>
          </div>
          <div className="product-detail__info">
            <div className="product-detail__list-info">
              <label>รหัสสินค้า</label>
              <p>10265</p>
            </div>
            <div className="product-detail__list-info">
              <label>ชนิด</label>
              <p>USB</p>
            </div>
            <div className="product-detail__list-info">
              <label>สถานะ</label>
              <p>มีขาย</p>
            </div>
            <div className="product-detail__further-description">
              <p>
                MODBUS DIN 32 INPUT PNP และ MODBUS DIN 32 INPUT NPN
                เป็นบอร์ดที่มี INPUT รับสัญญาณแบบ OPTO ISOLATION จำนวน 32 ช่อง
                รับสัญญาณ 3-30V DC INPUT รับคำสั่งการทำงานผ่านทางการสื่อสาร
                RS485 มี PROTOCAL ในการสั่งงานบอร์ดแบบ MODBUS RTU
                โดยสามารถต่อใช้งานได้ 247 อุปกรณ์ ในระบบบัส
                ต่อสายใช้งานได้ในระยะไกลถึง 1.2 กิโลเมตร (แยกแหล่งจ่ายไฟ)
              </p>
            </div>
            <div className="product-detail__warning-info">
              <span>*** ไม่รับคืนสินค้าทุกกรณี ***</span>
            </div>
          </div>
        </div>
        {/* ---   Product Detail   --- */}

        {/* ---   Product Feature   --- */}
        <div className="product-detail__container">
          <ShowProductDetail header="คุณสมบัติ" />
        </div>
        {/* ---   Product Feature   --- */}

        {/* ---   Product Component   --- */}
        <div className="product-detail__container">
          <ShowProductDetail header="บอร์ด Arduino ประกอบด้วย" />
        </div>
        {/* ---   Product Component   --- */}
      </div>
    </div>
  );
}

export default ProductDetail;