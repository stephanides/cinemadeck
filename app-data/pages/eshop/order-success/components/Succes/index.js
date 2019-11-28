import React, { useEffect } from 'react';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

import locale from '../../../../../shared/localisation/eshop/order-success';

const Success = ({ cart, lang, productImg }) => {
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

      cart.sort(compare);

      for (let i = 0; i < cart.length; i += 1) {
        if (filesId.indexOf(cart[i].id) < 0) {
          filesId += cart[i].id;
        }
      }

      console.log(filesId);

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
};

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
};

export default Success;
