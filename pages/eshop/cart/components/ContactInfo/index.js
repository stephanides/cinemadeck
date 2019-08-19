import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';

const ContactInfo = () => (
  <div className="pt-5 pr-5 contact-info-container position-relative mb-5">
    <p className="text-uppercase"><small>Vyplňte prosím vaše fakturační Údaje</small></p>
    <h3 className="text-uppercase mb-5">Jméno, Adresa a Kontakt</h3>
    <div className="bg-white p-5">
      <FormGroup>
        <Input type="text" id="name" name="name" placeholder="Jméno a Příjmení" className="border-0" required />
        <div className="invalid-feedback">
          Prosím zadejte jméno.
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="text" id="street" name="street" placeholder="Ulice a číslo popisné" className="border-0" required />
        <div className="invalid-feedback">
          Prosím zadejte ulici a číslo popisné.
        </div>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Input type="text" id="city" name="city" placeholder="Město" className="border-0" required />
          <div className="invalid-feedback">
            Prosím zadejte město.
          </div>
        </Col>
        <Col>
          <Input type="text" id="psc" name="psc" placeholder="PSČ" className="border-0" required />
          <div className="invalid-feedback">
            Prosím zadejte poštové smerové číslo.
          </div>
        </Col>
      </FormGroup>
      <FormGroup className="pl-1">
        <Input type="select" id="state" name="state" className="border-0" required>
          <option defaultChecked>Stát</option>
          <option value="cz">Česká republika</option>
          <option value="sk">Slovensko</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Input type="email" id="email" name="email" placeholder="E-mail" className="border-0" required />
        <div className="invalid-feedback">
          Prosím zadejte validní email.
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

export default ContactInfo;
