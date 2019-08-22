import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import locale from '../../../../../app-data/shared/localisation/cart';

const ContactInfo = ({ lang }) => (
  <div className="pt-5 pr-5 contact-info-container position-relative mb-5">
    <p className="text-uppercase"><small>{locale[lang].billingDataToFill}</small></p>
    <h3 className="text-uppercase mb-5">{locale[lang].nameAddressContact}</h3>
    <div className="bg-white p-5">
      <FormGroup>
        <Input type="text" id="name" name="name" placeholder={locale[lang].namePlaceholder} className="border-0" required />
        <div className="invalid-feedback">
          {locale[lang].nameError}
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="text" id="street" name="street" placeholder={locale[lang].streetPlaceholder} className="border-0" required />
        <div className="invalid-feedback">
          {locale[lang].streetError}
        </div>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Input type="text" id="city" name="city" placeholder={locale[lang].cityPlaceholder} className="border-0" required />
          <div className="invalid-feedback">
            {locale[lang].cityError}
          </div>
        </Col>
        <Col>
          <Input type="text" id="psc" name="psc" placeholder={locale[lang].postCode} className="border-0" required />
          <div className="invalid-feedback">
            {locale[lang].postCodeError}
          </div>
        </Col>
      </FormGroup>
      <FormGroup className="pl-1">
        <Input type="select" id="state" name="state" className="border-0" required>
          <option defaultChecked value="">{locale[lang].state}</option>
          <option value="cz">{locale[lang].czechRepublic}</option>
          <option value="sk">{locale[lang].slovakRepublic}</option>
        </Input>
        <div className="invalid-feedback">
          {locale[lang].stateError}
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="email" id="email" name="email" placeholder={locale[lang].emailPlaceholder} className="border-0" required />
        <div className="invalid-feedback">
          {locale[lang].emailError}
        </div>
      </FormGroup>
    </div>
    <style jsx>
      {
        `
          .contact-info-container {
            z-index: 2;
          }
        `
      }
    </style>
  </div>
);

ContactInfo.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ContactInfo;
