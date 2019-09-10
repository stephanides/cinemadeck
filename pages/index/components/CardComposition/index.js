/* eslint-disable react/no-danger */
import './scss/cardcomposition.scss';
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/CardComposition';


// eslint-disable-next-line arrow-body-style
const CardComposition = ({ lang }) => {
  const [isOpen, toggle] = useState(false);
  return (
    <div className="cardcomposition" id="cardcomposition">
      <Container fluid>
        <Container className="pl-0 pr-0">
          <h2 className="text-center">{localisation[lang].cardCompositionTitle}</h2>
          <div className="holder">
            <div className="flip-card">
              <div className={isOpen ? 'flip-card-holder-flipped' : 'flip-card-holder'}>
                <div className="flip-card-front">
                  <img className={lang === 'cz' ? 'd-block' : 'd-none'} src="/static/images/composition/karta1.png" alt="" />
                  <img className={lang === 'cz' ? 'd-none' : 'd-block'} src="/static/images/composition/en/karta1.png" alt="" />
                </div>
                <div className="flip-card-back">
                  <img className={lang === 'cz' ? 'd-block' : 'd-none'} src="/static/images/composition/karta2.png" alt="" />
                  <img className={lang === 'cz' ? 'd-none' : 'd-block'} src="/static/images/composition/en/karta2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="card-text-holder-desktop">
              <div className={isOpen ? 'left-card1-text fade-out-left' : 'left-card1-text'}>
                <div className="text-item text-1">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition1Title}</h6>
                    <p>{localisation[lang].cardComposition1Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow1.png" alt="" />
                </div>
                <div className="text-item text-2">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition2Title}</h6>
                    <p>{localisation[lang].cardComposition2Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow2.png" alt="" />
                </div>
                <div className="text-item text-3">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition3Title}</h6>
                    <p>{localisation[lang].cardComposition3Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow3.png" alt="" />
                </div>
                <div className="text-item text-4">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition4Title}</h6>
                    <p>{localisation[lang].cardComposition4Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow4.png" alt="" />
                </div>
              </div>
              <div className={isOpen ? 'right-card1-text fade-out-right' : 'right-card1-text'}>
                <div className="text-item text-5">
                  <img src="/static/images/composition/arrow5.png" alt="" />
                  <div className="text">
                    <h6>{localisation[lang].cardComposition5Title}</h6>
                    <p>{localisation[lang].cardComposition5Text}</p>
                  </div>
                </div>
                <div className="text-item text-6">
                  <img src="/static/images/composition/arrow6.png" alt="" />
                  <div className="text">
                    <h6>{localisation[lang].cardComposition6Title}</h6>
                    <p>{localisation[lang].cardComposition6Text}</p>
                  </div>
                </div>
                <div className="text-item text-7">
                  <img src="/static/images/composition/arrow7.png" alt="" />
                  <div className="text">
                    <h6>{localisation[lang].cardComposition7Title}</h6>
                    <p>{localisation[lang].cardComposition7Text}</p>
                  </div>
                </div>
              </div>
              <div className={isOpen ? 'left-card2-text' : 'left-card2-text fade-out-left'}>
                <div className="text-item text-8">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition8Title}</h6>
                    <p>{localisation[lang].cardComposition8Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow8.png" alt="" />
                </div>
                <div className="text-item text-9">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition9Title}</h6>
                    <p>{localisation[lang].cardComposition9Text}</p>
                  </div>
                  <img src="/static/images/composition/arrow9.png" alt="" />
                </div>
              </div>
              <div className={isOpen ? 'right-card2-text' : 'right-card2-text fade-out-right'}>
                <div className="text-item text-10">
                  <img src="/static/images/composition/arrow10.png" alt="" />
                  <div className="text">
                    <h6>{localisation[lang].cardComposition10Title}</h6>
                    <p>{localisation[lang].cardComposition10Text}</p>
                  </div>
                </div>
                <div className="text-item text-11">
                  <img src="/static/images/composition/arrow11.png" alt="" />
                  <div className="text">
                    <h6>{localisation[lang].cardComposition11Title}</h6>
                    <p>{localisation[lang].cardComposition11Text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-text-holder-mobile">
              <div className={isOpen ? 'left-card1-text fade-out-left' : 'left-card1-text'}>
                <div className="text-item text-1">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition1Title}</h6>
                    <p>{localisation[lang].cardComposition1Text}</p>
                  </div>
                </div>
                <div className="text-item text-2">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition2Title}</h6>
                    <p>{localisation[lang].cardComposition2Text}</p>
                  </div>
                </div>
                <div className="text-item text-3">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition3Title}</h6>
                    <p>{localisation[lang].cardComposition3Text}</p>
                  </div>
                </div>
                <div className="text-item text-4">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition4Title}</h6>
                    <p>{localisation[lang].cardComposition4Text}</p>
                  </div>
                </div>
              </div>
              <div className={isOpen ? 'right-card1-text fade-out-right' : 'right-card1-text'}>
                <div className="text-item text-5">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition5Title}</h6>
                    <p>{localisation[lang].cardComposition5Text}</p>
                  </div>
                </div>
                <div className="text-item text-6">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition6Title}</h6>
                    <p>{localisation[lang].cardComposition6Text}</p>
                  </div>
                </div>
                <div className="text-item text-7">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition7Title}</h6>
                    <p>{localisation[lang].cardComposition7Text}</p>
                  </div>
                </div>
              </div>
              <div className={isOpen ? 'left-card2-text' : 'left-card2-text fade-out-left'}>
                <div className="text-item text-8">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition8Title}</h6>
                    <p>{localisation[lang].cardComposition8Text}</p>
                  </div>
                </div>
                <div className="text-item text-9">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition9Title}</h6>
                    <p>{localisation[lang].cardComposition9Text}</p>
                  </div>
                </div>
              </div>
              <div className={isOpen ? 'right-card2-text' : 'right-card2-text fade-out-right'}>
                <div className="text-item text-10">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition10Title}</h6>
                    <p>{localisation[lang].cardComposition10Text}</p>
                  </div>
                </div>
                <div className="text-item text-11">
                  <div className="text">
                    <h6>{localisation[lang].cardComposition11Title}</h6>
                    <p>{localisation[lang].cardComposition11Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => toggle(!isOpen)}>
            <div className="flip-image" />
            {localisation[lang].cardSide}
          </button>
        </Container>
      </Container>
    </div>
  );
};

CardComposition.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default CardComposition;
