/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import { compose, graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { /* getProductsFromCart, */ getOrderByNumQuery } from '../../app-data/graphql/query';
import { /* initCartMutation, */ updateOrderMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

import Failed from '../../app-data/pages/eshop/download/components/Failed';
import Success from '../../app-data/pages/eshop/download/components/Success';

// import locale from '../../app-data/shared/localisation/eshop/order-success';
import styles from '../../app-data/pages/eshop/order-success/styles/order-success.style';

const DynamicFooter = dynamic(import('../../app-data/shared/components/Footer'));

const Download = compose(
  // graphql(getLocaleQuery),
  // graphql(initCartMutation),
  // graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getOrderByNumQuery, {
    name: 'getOrderByNum',
    options: ({ uniqUid }) => ({
      variables: { orderNum: uniqUid ? uniqUid.split('-')[1] : false },
    }),
  }),
  graphql(updateOrderMutation, { name: 'updateOrderMutate' }),
)(({
  lang, getOrderByNum: { error, loading, order }, uniqUid,
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <>LOADING</>;
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (order) {
      for (let i = 0; i < order.products.length; i += 1) {
        let id = '001';

        if (order.products[i].title === 'Interview Editing Pack PRO') {
          id = '002';

        const product = {
          ...order.products[i],
          id,
        };

        products.push(product);
      }

      const newProducts = [...products];

      setProducts(newProducts);
    }
  }, [order]);
  const setProductImages = (cartData) => {
    let img = '';
    // console.log(cartData);

    const compare = (a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };

    cartData.sort(compare);

    for (let i = 0; i < cartData.length; i += 1) {
      if (img.indexOf(cartData[i].id) < 0) {
        img += cartData[i].id;
      }
    }

    return img;
  };
  const handleDownloadZip = async () => {
    try {
      const zip = new JSZip();
      let filesId = '';

      const compare = (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      };

      products.sort(compare);

      for (let i = 0; i < products.length; i += 1) {
        if (filesId.indexOf(products[i].id) < 0) {
          filesId += products[i].id;
        }
      }

      // console.log(filesId);

      switch (filesId) {
        case '001': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Guide (${lang.toUpperCase()}).pdf`);
          const file2 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Checklist (${lang.toUpperCase()}).pdf`);
          const file3 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`);
          const file4 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Mobile (${lang.toUpperCase()}).pdf`);
          const file5 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Print Data (${lang.toUpperCase()}).pdf`);

          zip.file(`CinemaDeck Guide (${lang.toUpperCase()}).pdf`, file1, { binary: true });
          zip.file(`CinemaDeck Checklist (${lang.toUpperCase()}).pdf`, file2, { binary: true });
          zip.file(`CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`, file3, { binary: true });
          zip.file(`CinemaDeck Mobile (${lang.toUpperCase()}).pdf`, file4, { binary: true });
          zip.file(`CinemaDeck Print Data (${lang.toUpperCase()}).pdf`, file5, { binary: true });

          break;
        }
        case '002': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Titles Presets.aep`);
          zip.file('CinemaDeck Titles Presets.aep', file1, { binary: true });

          break;
        }
        case '003': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`);
          zip.file(`CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`, file1, { binary: true });

          break;
        }
        case '001002': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Guide (${lang.toUpperCase()}).pdf`);
          const file2 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Checklist (${lang.toUpperCase()}).pdf`);
          const file3 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`);
          const file4 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Mobile (${lang.toUpperCase()}).pdf`);
          const file5 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Print Data (${lang.toUpperCase()}).pdf`);
          const file6 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Titles Presets.aep`);

          zip.file(`CinemaDeck Guide (${lang.toUpperCase()}).pdf`, file1, { binary: true });
          zip.file(`CinemaDeck Checklist (${lang.toUpperCase()}).pdf`, file2, { binary: true });
          zip.file(`CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`, file3, { binary: true });
          zip.file(`CinemaDeck Mobile (${lang.toUpperCase()}).pdf`, file4, { binary: true });
          zip.file(`CinemaDeck Print Data (${lang.toUpperCase()}).pdf`, file5, { binary: true });
          zip.file('CinemaDeck Titles Presets.aep', file6, { binary: true });

          break;
        }
        case '001003': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Guide (${lang.toUpperCase()}).pdf`);
          const file2 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Checklist (${lang.toUpperCase()}).pdf`);
          const file3 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`);
          const file4 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Mobile (${lang.toUpperCase()}).pdf`);
          const file5 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Print Data (${lang.toUpperCase()}).pdf`);
          const file6 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`);

          zip.file(`CinemaDeck Guide (${lang.toUpperCase()}).pdf`, file1, { binary: true });
          zip.file(`CinemaDeck Checklist (${lang.toUpperCase()}).pdf`, file2, { binary: true });
          zip.file(`CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`, file3, { binary: true });
          zip.file(`CinemaDeck Mobile (${lang.toUpperCase()}).pdf`, file4, { binary: true });
          zip.file(`CinemaDeck Print Data (${lang.toUpperCase()}).pdf`, file5, { binary: true });
          zip.file(`CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`, file6, { binary: true });

          break;
        }
        case '002003': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Titles Presets.aep`);
          const file2 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`);

          zip.file('CinemaDeck Titles Presets.aep', file1, { binary: true });
          zip.file(`CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`, file2, { binary: true });

          break;
        }
        case '001002003': {
          const file1 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Guide (${lang.toUpperCase()}).pdf`);
          const file2 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Checklist (${lang.toUpperCase()}).pdf`);
          const file3 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`);
          const file4 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Mobile (${lang.toUpperCase()}).pdf`);
          const file5 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Print Data (${lang.toUpperCase()}).pdf`);
          const file6 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Titles Presets.aep`);
          const file7 = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`);

          zip.file(`CinemaDeck Guide (${lang.toUpperCase()}).pdf`, file1, { binary: true });
          zip.file(`CinemaDeck Checklist (${lang.toUpperCase()}).pdf`, file2, { binary: true });
          zip.file(`CinemaDeck Light Like Pro (${lang.toUpperCase()}).pdf`, file3, { binary: true });
          zip.file(`CinemaDeck Mobile (${lang.toUpperCase()}).pdf`, file4, { binary: true });
          zip.file(`CinemaDeck Print Data (${lang.toUpperCase()}).pdf`, file5, { binary: true });
          zip.file('CinemaDeck Titles Presets.aep', file6, { binary: true });
          zip.file(`CinemaDeck Sound Like Pro (${lang.toUpperCase()}).pdf`, file7, { binary: true });

          break;
        }
        default:
          break;
      }

      const zipContentBlob = await zip.generateAsync({ type: 'blob' });
      // console.log(zipContentBlob);
      saveAs(zipContentBlob, 'CinemaDeck.zip');
    } catch (err) {
      console.log(err);
    }
  };

  const imgSrc = `order-success/${setProductImages(products)}.png`;

  console.log(products);
  console.log(imgSrc);
  console.log(order);

  // const [productImg, handleProductImg] = useState('order-success.jpg');

  return (
    <Layout
      cart={[]}
      lang={lang}
      isHome={false}
    >
      <div className="order-success">
        <Container>
          {
            order && (order.orderUid === uniqUid) ? (
              <Success
                handleDownloadZip={handleDownloadZip}
                lang={lang}
                imgSrc={imgSrc}
              />
            ) : <Failed lang={lang} />
          }
        </Container>
        <div className="position-relative">
          <DynamicFooter lang={lang} />
        </div>
      </div>
      <style jsx global>{styles}</style>
    </Layout>
  );
});

Download.getInitialProps = async ({ query }) => ({
  lang: query.locale,
  uniqUid: query.uniqUid,
});

export default Download;
