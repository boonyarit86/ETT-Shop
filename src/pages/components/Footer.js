import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <Help>
          <h3>ศูนย์ให้ความช่วยเหลือ</h3>
          <List>
            <li>การชำระเงิน</li>
            <li>สินค้าจากต่างประเทศ</li>
          </List>
        </Help>
        <About>
          <h3>เกี่ยวกับ ETT</h3>
          <List>
            <li>ประวัติ ETT</li>
            <li>บทความ</li>
            <li>ตัวแทนจำหน่าย</li>
            <li>ดาวน์โหลด</li>
          </List>
        </About>
        <Contact>
          <h3>ข้อมูลติดต่อ</h3>
          <List>
            <li>1112/96-98 ถ.สุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพ 10110</li>
            <li>
              <h3>โทร:</h3>02-712-1120
            </li>
            <li>
              <h3>แฟกซ์:</h3>02-391-7216
            </li>
            <li>
              <SocialLink>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
              </SocialLink>
            </li>
          </List>
        </Contact>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #000;
  padding: 20px 10px;
  margin-top: 50px;
  width: 100%;
  
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1128px;
`;

const List = styled.ul`
  margin-top: 10px;
  list-style: none;
  li {
    color: #fff;
    padding: 5px 0;
    max-width: 180px;
  }
`;

const Help = styled.div`
  color: #fff;
  flex-grow: 1;
`;

const About = styled(Help)``;

const Contact = styled(Help)``;

const SocialLink = styled.div`
    margin-top:10px;
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    width: 38px;
    height: 38px;
    background-color: #8b8d94;
    border-radius: 50%;
    margin-right: 5px;
`;
