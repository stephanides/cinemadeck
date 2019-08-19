import React from 'react';
import {
  Col, FormGroup, Input, Label, Row,
} from 'reactstrap';

const PaymentMethods = () => (
  <div className="pt-5">
    <h3 className="text-uppercase mb-5">Zpúsob platby</h3>
    <div className="pr-5">
      <div className="p-4 bg-white mb-5">
        <Row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="card" id="card" />
                {' '}
                Platební karta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="paypal" id="paypal" />
                {' '}
                PayPal
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="bank" id="bank" />
                {' '}
                Bankovní prevod
              </Label>
            </FormGroup>
          </Col>
          <Col />
        </Row>
      </div>
    </div>
  </div>
);

export default PaymentMethods;
