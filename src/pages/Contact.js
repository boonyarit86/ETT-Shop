import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <>
      <ContainerInfo>
        <Content>
          <Box>
            <h2>
              ข้อมูลติดต่อ <span></span>
            </h2>
            <Info>
              <img src="./images/address-icon--gray.png" alt="" />
              <span>
                1112/96-98 ถ.สุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพ 10110
              </span>
            </Info>
            <Info>
              <img src="./images/calendar-icon--gray.png" alt="" />
              <span>วันจันทร์ - วันศุกร์</span>
            </Info>
            <Info>
              <img src="./images/clock-icon--gray.png" alt="" />
              <span>09.00 - 17.00 น.</span>
            </Info>
            <Info>
              <img src="./images/phone-icon--gray.png" alt="" />
              <span>02-712-1120</span>
            </Info>
            <Info>
              <img src="./images/fax-icon--gray.png" alt="" />
              <span>02-391-7216</span>
            </Info>
            <Info>
              <img src="./images/line-icon--gray.png" alt="" />
              <span>08-1712-5252</span>
            </Info>
            <Info>
              <img src="./images/facebook-icon--gray.png" alt="" />
              <a href="https://m.facebook.com/ett.co.th">Etteam</a>
            </Info>
            <Info>
              <img src="./images/email-icon--gray.png" alt="" />
              <span>sale@etteam.com</span>
            </Info>
          </Box>
        </Content>
      </ContainerInfo>
      <ContainerMap>
        <ContentMap>
          <DisplayMap>
            <h2>
              แผนที่การเดินทาง <span></span>
            </h2>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31010.635861257648!2d100.5962471220557!3d13.698483784435894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fee89cda1ed%3A0x59665e574efa6aa7!2z4Lit4Li14LiX4Li14LiX4Li1!5e0!3m2!1sth!2sth!4v1640602141857!5m2!1sth!2sth"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </p>
            <div>
              <img src="./images/ett-map.jpg" />
            </div>
          </DisplayMap>
        </ContentMap>
      </ContainerMap>
    </>
  );
}

export default Contact;

const ContainerInfo = styled.div`
  background: #fff;
`;
const ContainerMap = styled.div`
  background: #f5f5f7;
`;

const Content = styled.div`
  margin: 80px auto 0 auto;
  max-width: 1128px;
  padding: 10px;
`;

const ContentMap = styled(Content)`
  margin: 0 auto;
`;

const Box = styled.div`
  background: #fff;
  padding: 10px 0px;
  margin: 20px 0;

  h2 {
    padding: 10px 0;
    position: relative;
    color: #333;

    span {
      position: absolute;
      width: 80px;
      height: 3px;
      background: #002ead;
      bottom: 0;
      left: 0;
    }
  }
`;

const DisplayMap = styled(Box)`
  padding: 10px 20px;

  p {
    width: 100%;
    height: 600px;
    margin: 20px 0;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  div {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
    }
  }

`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 28px;
    height: 28px;
  }
  span,
  a {
    margin-left: 10px;
    color: #8b8d94;
  }

  a:hover {
    color: #002ead;
  }
`;
