import React, { useEffect } from 'react';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import LazyLoad from 'react-lazyload';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { removeProductFromCartMutation } from '../../../../../graphql/mutation';
import { getOrderByNumQuery } from '../../../../../graphql/query';
import locale from '../../../../../shared/localisation/eshop/order-success';

const Success = compose(
  graphql(removeProductFromCartMutation, { name: 'removeProduct' }),
  graphql(getOrderByNumQuery),
)(({
  /* cart, */ data: { error, loading, order }, lang, productImg, removeProduct, orderNum, paymentMethod,
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <>Loading</>;
  }

  // console.log(order);

  useEffect(() => {
    const handleSendSuccessMail = async () => {
      const xhr = new XMLHttpRequest();
      const url = '/send-order-notification';
      const {
        name, email, address, orderUid, products, totalPriceToPay,
      } = order;
      const newProducts = [];
      let data = {
        address, email, name, lang, orderNum, orderUid, paymentMethod, // products: order.products,
      };

      for (let i = 0; i < products.length; i += 1) {
        const priceVat = products[i].price * 0.21;
        const modProd = { ...products[i], priceVat };

        newProducts.push(modProd);
      }

      data = {
        ...data,
        products: newProducts,
        totalPrice: totalPriceToPay,
        totalPriceVat: (totalPriceToPay - (totalPriceToPay * 0.21)).toFixed(2),
        VAT: (totalPriceToPay * 0.21).toFixed(2),
      };

      // console.log(data);

      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = async () => {
        if (xhr.status === 200 && xhr.responseText) {
          // console.log(xhr.responseText);
          try {
            const productIds = [];
            // console.log(order);
            if (order) {
              for (let i = 0; i < order.products.length; i += 1) {
                // await removeProduct({ variables: { id:  } });
                if (order.products[i].title === 'CinemaDeck Cards') {
                  productIds.push('001');
                } else if (order.products[i].title === 'Title Presets') {
                  productIds.push('002');
                } else {
                  productIds.push('003');
                }
              }

              let j = 0;
              const promises = [];

              while (j < productIds.length) {
                promises.push(removeProduct({ variables: { id: productIds[j] } }));
                j += 1;
              }

              Promise.all(promises);
            }
          } catch (err) {
            console.log(err);
          }
        } else if (xhr.status !== 200) {
          console.log(xhr);
        }
      };

      xhr.send(JSON.stringify(data));
    };

    if (order && !order.userNotified) {
      handleSendSuccessMail();
    }
  }, []);

  const handleDownloadZip = async () => {
    try {
      const zip = new JSZip();
      let filesId = '';
      const productIds = [];

      for (let i = 0; i < order.products.length; i += 1) {
        // await removeProduct({ variables: { id:  } });
        if (order.products[i].title === 'CinemaDeck Cards') {
          productIds.push('001');
        } else if (order.products[i].title === 'Title Presets') {
          productIds.push('002');
        } else {
          productIds.push('003');
        }
      }

      // console.log(productIds);

      const compare = (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      };

      productIds.sort(compare);

      // console.log(productIds);

      for (let i = 0; i < productIds.length; i += 1) {
        if (filesId.indexOf(productIds[i]) < 0) {
          filesId += productIds[i]; // .id;
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

  return (
    <>
      <div className="order-success-head d-flex align-items-center justify-content-center mt-3">
        <h1 className="text-uppercase w-100 text-center">{locale[lang].welcomeToFamily}</h1>
        <h2 className="text-uppercase w-100 text-center">{locale[lang].downloadFIlesBelow}</h2>
      </div>
      <div className="order-success-content">
        <LazyLoad height={350}>
          <img className="d-block mx-auto pb-4" src={`/static/images/${productImg}`} alt="" />
        </LazyLoad>
        <button
          type="button"
          className="text-uppercase d-block mt-4 mb-4 mx-auto"
          onClick={handleDownloadZip}
        >
          {locale[lang].downloadBtn}
        </button>
        <p className="text-center my-5">
          {locale[lang].descriptionText}
        </p>
      </div>
    </>
  );
});

Success.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      id: PropTypes.string,
      price: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
        ___typename: PropTypes.string,
      }),
      title: PropTypes.string,
      totalPrice: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
        ___typename: PropTypes.string,
      }),
      ___typename: PropTypes.string,
    }),
  ).isRequired,
  lang: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  orderNum: PropTypes.string.isRequired,
};

export default Success;
