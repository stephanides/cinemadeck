import '../../static/css/react-image-lightbox/style.min.css';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Lightbox from 'react-image-lightbox';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { /* getLocaleQuery, */ getProductsFromCart } from '../../app-data/graphql/query';
import { initCartMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

import styles from '../../app-data/pages/eshop/funnel/styles/funnel.style';
import locale from '../../app-data/shared/localisation/eshop/funnel';

const DynamicProduct = dynamic(import('../../app-data/pages/eshop/funnel/components/Product'));
const DynamicFooter = dynamic(import('../../app-data/shared/components/eshop/Footer'));

const initialState = {
  photoIndex: 0,
  isLightBoxOpen: false,
};
const Funnel = compose(
  graphql(initCartMutation),
  // graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ lang, cartProducts: { cart }, mutate }) => {
  useEffect(() => {
    const checkCart = async () => {
      try {
        if (process.browser) {
          await mutate({ variables: { cart: [] } });

          setTimeout(async () => {
            const cartStorageData = JSON.parse(window.localStorage.getItem('cart'));

            await mutate({ variables: { cart: cartStorageData } });
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkCart();

    return () => null;
  }, []);
  const [isLightBoxOpen, toggleLightBox] = useState(initialState.isLightBoxOpen);

  return (
    <Layout
      cart={cart}
      lang={lang}
      isHome={false}
    >
      {/*
        isLightBoxOpen && (
          <Lightbox
            mainSrc={lang === 'cz' ? '/static/images/funnel/light-like-PRO-info.png' : '/static/images/funnel/light-like-PRO_EN-LS1.jpg'}
            onCloseRequest={() => toggleLightBox(false)}
          />
        )
        */}
      <div className="funnel">
        <Container>
          <div className="funnel-heading-container">
            <h2 className="text-uppercase text-center pt-5 pb-5 mb-5">{locale[lang].funnelTitle}</h2>
          </div>
          <DynamicProduct
            lang={lang}
            data={{
              id: '003',
              title: locale[lang].soundLikeProTitle,
              image: '/static/images/SOUND-PRO.png',
              price: [180, 7],
              productTitle: 'Sound Like Pro',
              content: locale[lang].soundLikeProContent,
            }}
          />
          <DynamicProduct
            toggleLightBox={toggleLightBox}
            lang={lang}
            data={{
              id: '002',
              title: locale[lang].lightLikeProTitle,
              image: '/static/images/PRESETS.png',
              price: [180, 7],
              productTitle: 'Light Like Pro',
              content: locale[lang].lightLikeProContent,
              /* extraContent: {
                infoLine: locale[lang].lightLikeProExtraInfoLine,
                infoContent: locale[lang].lightLikeProExtraInfoContent,
              }, */
            }}
          />
        </Container>
        <DynamicFooter lang={lang} />
        <style jsx>{styles}</style>
      </div>
    </Layout>
  );
});

Funnel.getInitialProps = async ({ query }) => ({ lang: query.locale });

export default Funnel;
