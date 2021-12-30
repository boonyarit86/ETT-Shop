import React from "react";
import styled from "styled-components";

function PaymentBox ({ paymentImage, contactLists, theme, title, textColor }) {

    return (
           <Box>
               <Info>
                   <ContactInfo>
                        {contactLists.length > 0 && contactLists.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                   </ContactInfo>
                   <ImageInfo>
                       <img src={paymentImage} alt="" />
                   </ImageInfo>
               </Info>
               <Title style={{background: `${theme}`, color: `${textColor}`}}>{title}</Title>
           </Box>
    )

}

export default PaymentBox;

const Box = styled.div`
  width: 500px;
  border: 1px solid #ccc;
  background: #fff;
  /* padding: 0 10px; */
  margin: 10px 0;

  @media(max-width: 500px) {
      width: 90%;
  }
`;

const Info = styled.div`
  display: flex;
  height: 230px;
  border-bottom: 1px solid #ccc;
  span {
      margin-bottom: 5px;
  }

`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImageInfo = styled(ContactInfo)`
    border-left: 1px solid #ccc;
    img {
        width: 60%;
        height: 60%;
        transition: 0.3s;
    }

    img:hover {
        transform: scale(1.1);
    }
`;

const Title = styled.p`
    text-align: center;
    padding: 5px;
`;
