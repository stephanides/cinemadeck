/* eslint-disable no-nested-ternary */
import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import countries from './data/country-list';
import locale from '../../../../../shared/localisation/eshop/cart';

const ContactInfo = ({
  lang, handleStateChange, order, handleOrder,
}) => {
  const stateChange = (value) => {
    let num = 0;

    if (value === 'CZ') {
      num = 1;
    }
    if (value && value !== 'CZ') {
      num = 2;
    }

    handleStateChange(num);
    handleOrder({
      ...order,
      currency: num > 0
        ? (
          num < 2 ? 'CZK' : 'EUR'
        ) : 'EUR',
    });
  };

  return (
    <div className="pt-5 pr-5 contact-info-container position-relative mb-5">
      <p className="text-uppercase"><small>{locale[lang].billingDataToFill}</small></p>
      <h3 className="text-uppercase mb-5">{locale[lang].nameAddressContact}</h3>
      <div className="bg-white p-5">
        <FormGroup>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={locale[lang].namePlaceholder}
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
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
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
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
              className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
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
              className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
              required
            />
            <div className="invalid-feedback">
              {locale[lang].postCodeError}
            </div>
          </Col>
        </FormGroup>
        <FormGroup className="pl-1">
          <Input
            type="select"
            id="state"
            name="state"
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
            onChange={(e) => {
              const val = e.currentTarget.options[e.currentTarget.selectedIndex].value;

              stateChange(val);
            }}
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
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
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
            className="border-bottom border-secondary border-top-0 border-left-0 border-right-0 rounded-0"
          />
        </FormGroup>
      </div>
      <style jsx>
        {
          `
            .contact-info-container { z-index: 2; }
          `
        }
      </style>
    </div>
  );
};

ContactInfo.propTypes = {
  lang: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleOrder: PropTypes.func.isRequired,
  order: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
      psc: PropTypes.string,
    }),
    currency: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    note: PropTypes.string,
    paymentMethod: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.object),
    totalPriceToPay: PropTypes.number,
  }).isRequired,
};

export default ContactInfo;
