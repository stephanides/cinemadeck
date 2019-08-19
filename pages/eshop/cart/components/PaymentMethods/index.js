import React from 'react';
import {
  Col, FormGroup, Input, Label, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

const PaymentMethods = ({ handleOrder, order }) => {
  const { paymentMethod } = order;

  return (
    <div className="pt-5">
      <h3 className="text-uppercase mb-5">Zpúsob platby</h3>
      <div className="pr-5">
        <div className="p-4 bg-white mb-5">
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="card"
                    id="card"
                    value={0}
                    checked={paymentMethod === 0 && true}
                    onChange={(e) => {
                      handleOrder({
                        ...order,
                        paymentMethod: parseInt(e.currentTarget.value, 10),
                      });
                    }}
                  />
                  {' '}
                  Platební karta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="paypal"
                    id="paypal"
                    value={1}
                    checked={paymentMethod === 1 && true}
                    onChange={(e) => {
                      handleOrder({
                        ...order,
                        paymentMethod: parseInt(e.currentTarget.value, 10),
                      });
                    }}
                  />
                  {' '}
                  PayPal
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="bank"
                    id="bank"
                    value={2}
                    checked={paymentMethod === 2 && true}
                    onChange={(e) => {
                      handleOrder({
                        ...order,
                        paymentMethod: parseInt(e.currentTarget.value, 10),
                      });
                    }}
                  />
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
};

PaymentMethods.propTypes = {
  handleOrder: PropTypes.func.isRequired,
  order: PropTypes.shape({
    paymentMethod: PropTypes.number,
  }).isRequired,
};

export default PaymentMethods;
