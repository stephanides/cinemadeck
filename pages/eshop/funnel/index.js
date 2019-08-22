import React from 'react';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import Layout from '../../../app-data/shared/components/Layout';

const Funnel = compose(
  graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ data: { lang }, cartProducts: { cart } }) => (
  <Layout
    cart={cart}
    lang={lang}
    isHome={false}
  >
    <Container>
      <div className="funnel-heading-container">
        <h2 className="text-uppercase">Poslední dva kroky k dokonalému interview</h2>
      </div>
      <div>
        <aside>
          <img src="/static/images/LIGHT-PRO.png" alt="" />
        </aside>
        <div>
          <h3>Sviťte jako profesionál</h3>
          <p>
            Light like pro je návod s přesnými (instrukcemi podobně jako karty CinemaDeck), který vám umožní
            <br />
            <strong>profesionálne nasvítit vámi vybranou kompozici</strong>
            .
            V balíku LLP najdete celkem 5 světelných scén,
            <br />
            5 ruzných nastavení světel (1LS - 5LS), které přímo navazují na karty CinemaDeck.
          </p>
        </div>
      </div>
    </Container>
    <style jsx>
      {
        `
          .funnel-heading-container h2 {
            letter-spacing: .25rem;
          }
        `
      }
    </style>
  </Layout>
));

export default Funnel;
