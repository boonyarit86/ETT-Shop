import React from "react";
import styled from "styled-components";

function ShowProductDetail({ header }) {
  return (
    <>
      <Title>
        <p>{header}</p>
      </Title>

      <FeatureWrap>
        <FeatureList>
          32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
          โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ INPUT
          NPN (จุดรวมสัญญาณแบบบวก) <a href="#">Link</a>
          <ListImage>
            <div>
              <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
              <span>Img 1</span>
            </div>
            <div>
              <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
              <span>Img 1</span>
            </div>
          </ListImage>
          <FeatureWrap>
            <FeatureList>
              32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
              โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
              INPUT NPN (จุดรวมสัญญาณแบบบวก) <a href="#">Link</a>
              <ListImageChild>
                <div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
                  <span>Img 1</span>
                </div>
                <div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
                  <span>Img 1</span>
                </div>
              </ListImageChild>
              <FeatureWrap>
                <FeatureList>
                  32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
                  โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
                  INPUT NPN (จุดรวมสัญญาณแบบบวก) <a href="#">Link</a>
                </FeatureList>
                <FeatureList>
                  32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
                  โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
                  INPUT NPN (จุดรวมสัญญาณแบบบวก) <a href="#">Link</a>
                </FeatureList>
              </FeatureWrap>
            </FeatureList>
          </FeatureWrap>
        </FeatureList>
      </FeatureWrap>
    </>
  );
}

export default ShowProductDetail;

const Title = styled.div`
  padding: 5px 10px;
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.02);
  font-size: 1.12rem;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const FeatureWrap = styled.ul`
  margin: 20px 20px 10px 40px;

  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;

const FeatureList = styled.li`
  margin-bottom: 10px;
`;

const ListImage = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  span {
    font-size: 12px;
    margin: 5px 0;
    text-align: center;
    width: 450px;
    line-height: 1.8;
  }

  img {
    width: 450px;
    height: 450px;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    margin: 10px 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    img {
      width: 90%;
    }

    span {
      width: 90%;
    }
  }
`;

const ListImageChild = styled(ListImage)`
  img {
    width: 350px;
    height: 350px;
  }

  span {
    width: 350px;
  }

`;
