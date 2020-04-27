/* eslint-disable no-nested-ternary */
import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import countries from './data/country-list';
import styles from './styles/ContactInfo.style';
import locale from '../../../../../shared/localisation/eshop/cart';

const ContactInfo = ({ lang }) => (
  <div className="pt-5  contact-info-container position-relative">
    <p className="text-uppercase"><small className="letter-spacing-2">{locale[lang].billingDataToFill}</small></p>
    <h3 className="text-uppercase mb-5">{locale[lang].nameAddressContact}</h3>
    <div className="bg-white card">
      <FormGroup>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={locale[lang].namePlaceholder}
          className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
          required
        />
        <div className="invalid-feedback">
          {locale[lang].nameError}
        </div>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          id="street"
          name="street"
          placeholder={locale[lang].streetPlaceholder}
          className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
          required
        />
        <div className="invalid-feedback">
          {locale[lang].streetError}
        </div>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Input
            type="text"
            id="city"
            name="city"
            placeholder={locale[lang].cityPlaceholder}
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
            required
          />
          <div className="invalid-feedback">
            {locale[lang].cityError}
          </div>
        </Col>
        <Col>
          <Input
            type="text"
            id="psc"
            name="psc"
            placeholder={locale[lang].postCode}
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
            required
          />
          <div className="invalid-feedback">
            {locale[lang].postCodeError}
          </div>
        </Col>
      </FormGroup>
      <FormGroup className="">
        <Input
          type="select"
          id="state"
          name="state"
          className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
          required
        >
          <option defaultChecked value="">{locale[lang].state}</option>
          {
            countries.map((country) => (
              <option
                value={country.value}
                key={country.value}
              >
                {country.text}
              </option>
            ))
          }
        </Input>
        <div className="invalid-feedback">
          {locale[lang].stateError}
        </div>
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={locale[lang].emailPlaceholder}
          className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
          required
        />
        <div className="invalid-feedback">
          {locale[lang].emailError}
        </div>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          id="note"
          name="note"
          placeholder={locale[lang].notePlaceHolder}
          className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0 pl-0 input-label"
        />
      </FormGroup>
    </div>
    <style jsx>{styles}</style>
  </div>
);

ContactInfo.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ContactInfo;
