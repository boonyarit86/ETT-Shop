import React from "react";
import styled from "styled-components";
import NavigationSlide from "./components/NavigationSlide";
import ShowProductDetail from "./components/ShowProductDetail";

function ProductDetail() {
  return (
    <Container>
      <Section>
        <HeaderInfo>
          <ProductName>
            <span>New</span>
            <p>Yahari Book</p>
          </ProductName>
          <ProductPrice>
            <span>50 Bath</span>
          </ProductPrice>
        </HeaderInfo>

        <DisplayImage>
          <NavigationSlide />
        </DisplayImage>
      </Section>

      {/* ---   Product Detail   --- */}
      <SectionDescription>
        <Title>
          <p>รายละเอียดสินค้า</p>
        </Title>
        <TextInfo>
          <ListInfo>
            <label>รหัสสินค้า</label>
            <p>10265</p>
          </ListInfo>
          <ListInfo>
            <label>ชนิด</label>
            <p>USB</p>
          </ListInfo>
          <ListInfo>
            <label>สถานะ</label>
            <p>มีขาย</p>
          </ListInfo>
          <FurtherDescription>
            <p>
              MODBUS DIN 32 INPUT PNP และ MODBUS DIN 32 INPUT NPN เป็นบอร์ดที่มี
              INPUT รับสัญญาณแบบ OPTO ISOLATION จำนวน 32 ช่อง รับสัญญาณ 3-30V DC
              INPUT รับคำสั่งการทำงานผ่านทางการสื่อสาร RS485 มี PROTOCAL
              ในการสั่งงานบอร์ดแบบ MODBUS RTU โดยสามารถต่อใช้งานได้ 247 อุปกรณ์
              ในระบบบัส ต่อสายใช้งานได้ในระยะไกลถึง 1.2 กิโลเมตร
              (แยกแหล่งจ่ายไฟ)
            </p>
          </FurtherDescription>
          <WarningText>
            <span>*** ไม่รับคืนสินค้าทุกกรณี ***</span>
          </WarningText>
        </TextInfo>
      </SectionDescription>
      {/* ---   Product Detail   --- */}

      {/* ---   Product Feature   --- */}
      <SectionDescription>
        <ShowProductDetail header="คุณสมบัติ" />
      </SectionDescription>
      {/* ---   Product Feature   --- */}

      {/* ---   Product Component   --- */}
      <SectionDescription>
        <ShowProductDetail header="บอร์ด Arduino ประกอบด้วย" />
      </SectionDescription>
      {/* ---   Product Component   --- */}
    </Container>
  );
}

export default ProductDetail;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #ccc;
  padding: 100px 10px 80px 10px;

  @media (max-width: 500px) {
    padding: 100px 0 80px 0;
  }
`;

const Section = styled.div`
  max-width: 1128px;
  background-color: #fff;
  margin: 10px auto;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px 0;

  @media (max-width: 500px) {
    border-radius: 0px;
  }
`;

const SectionDescription = styled(Section)`
  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ProductName = styled.div`
  flex: 1;
  position: relative;
  padding-top: 20px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    font-weight: 500px;
    padding: 2px 4px;
    background-color: #ee4d2d;
    color: #fff;
    border-radius: 4px;
  }
`;
const ProductPrice = styled.div`
  flex: 1;
  text-align: right;
  margin-top: 20px;
  color: #ee4d2d;
  font-weight: 500;

  @media (max-width: 500px) {
    text-align: left;
    margin-top: 10px;
  }
`;

const DisplayImage = styled.div`
  padding: 0 10px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Title = styled.div`
  padding: 5px 10px;
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.02);
  font-size: 1.12rem;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const TextInfo = styled.div`
  margin: 10px 20px;
  margin-top: 20px;
`;

const ListInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
  label {
    width: 100px;
    max-width: 120px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const FurtherDescription = styled.div`
  margin-bottom: 20px;
  p {
    text-indent: 20px;
    line-height: 1.87rem;
    white-space: pre-wrap;
  }
`;

const WarningText = styled.div`
  padding: 10px;
  color: #fff;
  background-color: #d0011b;
`;
