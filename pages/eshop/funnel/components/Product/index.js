import React from 'react';
import { Col, Row } from 'reactstrap';

const Product = () => (
  <Row className="mb-5">
    <Col md="4" lg="4">
      <aside>
        <img src="/static/images/LIGHT-PRO.png" alt="" />
      </aside>
    </Col>
    <Col md="8" lg="8">
      <h3>Sviťte jako profesionál</h3>
      <p className="font-weight-lighter">
        Light like pro je návod s přesnými (instrukcemi podobně jako karty CinemaDeck), který vám umožní
        <br />
        <strong>profesionálne nasvítit vámi vybranou kompozici</strong>
        .
        V balíku LLP najdete celkem 5 světelných scén,
        <br />
        5 ruzných nastavení světel (1LS - 5LS), které přímo navazují na karty CinemaDeck.
      </p>
      {
        /* <p>
          <button></button>
        </p> */
      }
      <div className="price-add-to-cart-container d-flex pt-3">
        <div>
          <span className="font-weight-bold align-top">7</span>
          <span className="font-weight-lighter align-top">
            EUR
          </span>
        </div>
        <button
          type="button"
          className="ml-4"
        >
          PRIDAT DO KOSIKU
        </button>
      </div>
      <style jsx>
        {
          `
            .price-add-to-cart-container > div > span {
              font-size: 5rem;
            }
            .price-add-to-cart-container > div > span:first-child {
              line-height: 70px;
            }
            .price-add-to-cart-container > div > span:last-child {
              font-size: 1rem;
            }
            .price-add-to-cart-container > button {
              background-color: #37baf1;
              border-radius: .25rem;
              border: 0;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: .85rem;
              height: 70px;
              width: 265px;
              letter-spacing: .15rem;
            }
          `
        }
      </style>
    </Col>
  </Row>
);

export default Product;
