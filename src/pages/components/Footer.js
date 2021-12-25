import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <Help>
          <p>ศูนย์ให้ความช่วยเหลือ</p>
          <List>
            <li>การชำระเงิน</li>
            <li>สินค้าจากต่างประเทศ</li>
          </List>
        </Help>
        <About>
          <p>เกี่ยวกับ ETT</p>
          <List>
            <li>ประวัติ ETT</li>
            <li>บทความ</li>
            <li>ตัวแทนจำหน่าย</li>
            <li>ดาวน์โหลด</li>
          </List>
        </About>
        <Contact>
          <p>ข้อมูลติดต่อ</p>
          <List>
            <li>1112/96-98 ถ.สุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพ 10110</li>
            <li>
              <p>โทร:</p>02-712-1120
            </li>
            <li>
              <p>แฟกซ์:</p>02-391-7216
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
        <div className="hh2">
          {/* <hr /> */}
          <p>
            Copyright © 2000 - 2021 by ETT Co.,Ltd, Powered by{" "}
            <a href="suntechnet.com">suntechnet.com</a>
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #1a1c20;
  padding: 20px 10px;
  margin-top: 50px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1128px;
  position: relative;
  padding-bottom: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .hh2 {
    position: absolute;
    bottom: 0;
    left: 0;
    /* margin-top: 10px; */
    p {
      a {
        color: #eee;
        font-size: 12px;
        transition: 0.3s;
        &:hover {
          color: #ffc709;
        }
      }
    }
    padding-left: 25px;
    color: #eee;
    font-size: 12px;
  }
`;

const List = styled.ul`
  margin-top: 10px;
  list-style: none;
  li {
    color: #8b8d94;
    padding: 5px 0;
    max-width: 180px;

    p {
      color: #eee;
      line-height: 2;
    }
  }
`;

const Help = styled.div`
  color: #eee;
  padding: 0 25px;
  flex: 1;
  margin-bottom: 10px;
`;

const About = styled(Help)``;

const Contact = styled(Help)``;

const SocialLink = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 38px;
  height: 38px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 5px;
`;
