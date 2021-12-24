import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "../../shared/UIElements/Backdrop";
import NewsModal from "./NewsModal";

function News() {
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (item) => {
    if (item.newsType !== "UPDATE") {
      setData(item);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setData({});
  };

  return (
    <>
      <Container>
        <h1>ข่าวสาร</h1>
        <Content>
          {news.length > 0 &&
            news.map((item) => (
              <Item onClick={() => handleModal(item)}>
                <ItemHeader>
                  <ItemStatus
                    style={{
                      backgroundColor:
                        item.newsType === "UPDATE"
                          ? "#40e0d0"
                          : item.newsType === "Shop"
                          ? "#ff00ff"
                          : "#ff7f50",
                    }}
                  >
                    <p>{item.newsType}</p>
                  </ItemStatus>
                  <ItemDate>
                    <p>{item.date}</p>
                  </ItemDate>
                </ItemHeader>
                <ItemDescription>
                  <p>{item.description}</p>
                </ItemDescription>
              </Item>
            ))}
        </Content>
      </Container>

      {openModal && <NewsModal data={data} onClick={handleCloseModal} />}
      {openModal && <Backdrop onClick={handleCloseModal} />}
    </>
  );
}

export default News;

const Container = styled.div`
  width: 90%;  
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 10px;
`;

const Item = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border-left: 5px solid #424245;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ItemStatus = styled.div`
  color: #fff;
  font-size: 12px;
  width: 100px;
  display: flex;
  justify-content: center;
  height: 22px;
  align-items: center;
`;

const ItemDate = styled(ItemStatus)`
  margin-left: 10px;
  background-color: #424245;
`;

const ItemDescription = styled.div`
  color: #6e6e73;
`;

let news = [
  {
    title: "Changed regular hours from Monday to Saturday to Monday to Friday",
    description: "Open 09:00 a.m. to 05:00 p.m.",
    newsType: "UPDATE",
    date: "2021/12/17",
    exp: "2021/12/25",
  },
  {
    title: "ETT-ARDUINO's new version",
    description:
      "Available in our shop now, its price is only $12 (Not include taxs).",
    newsType: "Shop",
    date: "2021/12/17",
    exp: "2021/12/25",
    product: {
      productName: "ARDUINO V.2",
      description: "Battery can last 7 hours.",
      productImage: "https://o.lnwfile.com/pag2f9.jpg",
      productUrl: "",
    },
  },
  {
    title: "An annual sales",
    description:
      "Spend your money with our products over $100, You will given 15% discounts.",
    newsType: "Promotion",
    date: "2021/12/17",
    exp: "2021/12/25",
    adImage: "https://o.lnwfile.com/pag2f9.jpg",
  },
  
];
