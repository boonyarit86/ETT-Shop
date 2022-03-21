import React from "react";

function ShowProductDetail({ header }) {
  return (
    <React.Fragment>
      <div className="product-detail__title">
        <p>{header}</p>
      </div>

      <ul className="product-detail__feature">
        <li className="product-detail__feature-list">
          32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
          โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ INPUT
          NPN (จุดรวมสัญญาณแบบบวก) <a className="product-detail__link" href="#">Link</a>
          <div className="product-detail__img-list">
            <div>
              <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
              <span>Img 1</span>
            </div>
            <div>
              <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
              <span>Img 1</span>
            </div>
          </div>
          <ul className="product-detail__feature">
            <li className="product-detail__feature-list">
              32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
              โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
              INPUT NPN (จุดรวมสัญญาณแบบบวก) <a className="product-detail__link" href="#">Link</a>
              <div className="product-detail__img-list product-detail__img-list--child">
                <div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
                  <span>Img 1</span>
                </div>
                <div>
                  <img src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg" />
                  <span>Img 1</span>
                </div>
              </div>
              <ul className="product-detail__feature">
                <li className="product-detail__feature-list">
                  32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
                  โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
                  INPUT NPN (จุดรวมสัญญาณแบบบวก) <a className="product-detail__link" href="#">Link</a>
                </li>
                <li className="product-detail__feature-list">
                  32 INPUT รับสัญญาณ DC 3-30V ในแบบ OPTO ISOLATION
                  โดยมีจำหน่ายเป็นรุ่นแบบ INPUT PNP (จุดรวมสัญญาณแบบลบ) และ แบบ
                  INPUT NPN (จุดรวมสัญญาณแบบบวก) <a className="product-detail__link" href="#">Link</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default ShowProductDetail;