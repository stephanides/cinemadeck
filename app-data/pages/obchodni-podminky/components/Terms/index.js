/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/terms.style';
import localisation from '../../../../shared/localisation/ObchodnePodmienky';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].text1_1 });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].text1_1_10 });
const renderDangerHtml3 = (lang) => ({ __html: localisation[lang].text1_2 });
const Terms = ({ lang }) => (

  <div className="terms" id="terms">
    <Container fluid>
      <Container>
        <div className="term">
          <h1 className="text-center pb-4">{localisation[lang].title}</h1>
          <h6 className="text-center">I.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header1}</h6>
          <p dangerouslySetInnerHTML={renderDangerHtml(lang)} className="pb-4" />
          <p>{localisation[lang].text1_1_1}</p>
          <p>{localisation[lang].text1_1_2}</p>
          <p>{localisation[lang].text1_1_3}</p>
          <p>{localisation[lang].text1_1_4}</p>
          <p>{localisation[lang].text1_1_5}</p>
          <p>{localisation[lang].text1_1_6}</p>
          <p>{localisation[lang].text1_1_7}</p>
          <p>{localisation[lang].text1_1_8}</p>
          <p>{localisation[lang].text1_1_9}</p>
          <p dangerouslySetInnerHTML={renderDangerHtml2(lang)} className="pb-4" />
          <p dangerouslySetInnerHTML={renderDangerHtml3(lang)} />
          <p>{localisation[lang].text1_3}</p>
          <p>{localisation[lang].text1_4}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">II.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header2}</h6>
          <p>{localisation[lang].text2_1}</p>
          <p>{localisation[lang].text2_2}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">III.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header3}</h6>
          <p>{localisation[lang].text3_1}</p>
          <p>{localisation[lang].text3_2}</p>
          <p>{localisation[lang].text3_3}</p>
          <p>{localisation[lang].text3_4}</p>
          <p>{localisation[lang].text3_5}</p>
          <p>{localisation[lang].text3_6}</p>
          <p>{localisation[lang].text3_7}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">IV.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header4}</h6>
          <p>{localisation[lang].text4_1}</p>
          <p>{localisation[lang].text4_2}</p>
          <p>{localisation[lang].text4_3}</p>
          <p>{localisation[lang].text4_4}</p>
          <p>{localisation[lang].text4_5}</p>
          <p>{localisation[lang].text4_6}</p>
          <p>{localisation[lang].text4_7}</p>
          <p>{localisation[lang].text4_8}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">V.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header5}</h6>
          <p>{localisation[lang].text5_1}</p>
          <p>{localisation[lang].text5_2}</p>
          <p>{localisation[lang].text5_3}</p>
          <ul>
            <li>{localisation[lang].text5_3_1}</li>
            <li>{localisation[lang].text5_3_2}</li>
            <li>{localisation[lang].text5_3_3}</li>
            <li>{localisation[lang].text5_3_4}</li>
            <li>{localisation[lang].text5_3_5}</li>
            <li>{localisation[lang].text5_3_6}</li>
            <li>{localisation[lang].text5_3_7}</li>
          </ul>
          <p>{localisation[lang].text5_4}</p>
          <p>{localisation[lang].text5_5}</p>
          <p>{localisation[lang].text5_6}</p>
          <p>{localisation[lang].text5_7}</p>
          <p>{localisation[lang].text5_8}</p>
          <p>{localisation[lang].text5_9}</p>
          <p>{localisation[lang].text5_10}</p>
          <p>{localisation[lang].text5_11}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">VI.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header6}</h6>
          <p>{localisation[lang].text6_1}</p>
          <ul>
            <li>{localisation[lang].text6_1_1}</li>
            <li>{localisation[lang].text6_1_2}</li>
            <li>{localisation[lang].text6_1_3}</li>
            <li>{localisation[lang].text6_1_4}</li>
            <li>{localisation[lang].text6_1_5}</li>
          </ul>
          <p>{localisation[lang].text6_2}</p>
          <p>{localisation[lang].text6_3}</p>
          <ul>
            <li>{localisation[lang].text6_3_1}</li>
            <li>{localisation[lang].text6_3_2}</li>
            <li>{localisation[lang].text6_3_3}</li>
            <li>{localisation[lang].text6_3_4}</li>
          </ul>
          <p>{localisation[lang].text6_4}</p>
          <ul>
            <li>{localisation[lang].text6_4_1}</li>
            <li>{localisation[lang].text6_4_2}</li>
            <li>{localisation[lang].text6_4_3}</li>
          </ul>
          <p>{localisation[lang].text6_5}</p>
          <p>{localisation[lang].text6_6}</p>
          <p>{localisation[lang].text6_7}</p>
          <p>{localisation[lang].text6_8}</p>
          <p>{localisation[lang].text6_9}</p>
          <p>{localisation[lang].text6_10}</p>
          <p>{localisation[lang].text6_11}</p>
          <p>{localisation[lang].text6_12}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">VII.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header7}</h6>
          <p>{localisation[lang].text7_1}</p>
          <p>{localisation[lang].text7_2}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">VIII.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header8}</h6>
          <p>{localisation[lang].text8_1}</p>
          <p>{localisation[lang].text8_2}</p>
          <p>{localisation[lang].text8_3}</p>
        </div>
        <div className="term pt-4">
          <h6 className="text-center">IX.</h6>
          <h6 className="text-center pb-4">{localisation[lang].header9}</h6>
          <p>{localisation[lang].text9_1}</p>
          <p>{localisation[lang].text9_2}</p>
          <p>{localisation[lang].text9_3}</p>
          <p>{localisation[lang].text9_4}</p>
          <p>{localisation[lang].text9_5}</p>
          <p>{localisation[lang].text9_6}</p>
          <p>{localisation[lang].text9_7}</p>
        </div>
      </Container>
    </Container>
    <style jsx>{styles}</style>
  </div>
);

Terms.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Terms;
