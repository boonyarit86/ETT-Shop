import React from "react";
import styled from "styled-components";

function AboutMe() {
  return (
    <Container>
      <Content>
        <Box>
          <TextInfo>
            <h2>
              เกี่ยวกับ ETT <span></span>
            </h2>
            <p>
              อีทีที ผู้นำด้านวงการไมโครอิเล็กทรอนิกส์
              รับวิจัยและผลิตสินค้าในงานด้านไมโครอิเล็กทรอนิกส์
              และระบบควบคุมอัตโนมัติ
              มีผลงานวิจัยและผลิตสินค้าให้กับบริษัทชั้นนำมากมาย
              รัปประกันในคุณภาพผลงาน สามารถทำงานได้รวมทั้งความซื่อตรงในวิชาชีพ
              รับประกันความลับและลิขสิทธิ์ ของตัวสินค้า ให้กับ ท่าน
              เป็นทียอมรับของวงการนานนับ สิบปี
              เพียงท่านกำหนดรูปแบบการทำงานของเครื่องที่ต้องการ หรือ
              มีบอร์ดตัวอย่างจากต่างประเทศ สั่งทำ ได้ตั้งแต่ 5-10 ชิ้น หรือหลาย
              พันชิ้น
              เพื่อนำไปใช้งานทั่วไปหรือใช้ทดแทนสินค้าต่างประเทศที่มีราคาแพง
              ท่านสามารถลดค่าใช้จ่ายในการวิจัยพัฒนาสินค้า
              ลดการนำเข้าบอร์ดจากต่างประเทศ สนใจสามารถติดต่อรับบริการได้ที่
              บริษัท อีทีที
            </p>
          </TextInfo>
          <ImageInfo>
            <img src="/images/ett-intro1.jpg" alt="" />
          </ImageInfo>
        </Box>
      </Content>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  background: #f5f5f7;
`;
const Content = styled.div`
  margin: 80px auto 0 auto;
  max-width: 1128px;
  padding: 10px;
`;
const Box = styled.div`
  background: #fff;
  padding: 10px 20px;
  margin: 20px 0;
`;
const ImageInfo = styled.div`
  display: flex;
  justify-content: center;
  img {
      width: 100%;
  }
`;
const TextInfo = styled.div`
  h2 {
    padding: 10px 0;
    position: relative;

    span {
      position: absolute;
      width: 50px;
      height: 3px;
      background: #002ead;
      bottom: 0;
      left: 0;
    }
  }

  p {
    margin: 10px 0;
  }
`;
