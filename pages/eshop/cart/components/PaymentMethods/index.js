import React from 'react';
import {
  Col, FormGroup, Input, Label, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

import locale from '../../../../../app-data/shared/localisation/cart';

const PaymentMethods = ({ handleOrder, lang, order }) => {
  const { paymentMethod } = order;

  return (
    <div className="pt-5">
      <h3 className="text-uppercase mb-5">{locale[lang].methodOfPayment}</h3>
      <div className="pr-5">
        <div className="p-4 bg-white mb-5">
          <Row>
            <Col className="pr-0">
              <FormGroup check className="pt-3 pb-3 border-bottom">
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
                  {locale[lang].paymentCard}
                </Label>
              </FormGroup>
              <FormGroup check className="pt-3 pb-3 border-bottom">
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
                  {locale[lang].payPal}
                </Label>
              </FormGroup>
              <FormGroup check className="pt-3 pb-3">
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
                  {locale[lang].bankTransfer}
                </Label>
              </FormGroup>
            </Col>
            <Col className="pl-0">
              <div className="border-bottom logo-line">
                <img src="/static/images/payment-cards-logos.png" className="d-block ml-auto mr-3" alt="" />
              </div>
              <div className="border-bottom logo-line">
                <img src="/static/images/paypal-logo.png" className="d-block ml-auto mr-3" alt="" />
              </div>
              <div className="pt-3 pb-3">
                {''}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <style jsx>
        {
          `
            .logo-line {
              height: 57px;
            }
          `
        }
      </style>
    </div>
  );
};

PaymentMethods.propTypes = {
  handleOrder: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  order: PropTypes.shape({
    paymentMethod: PropTypes.number,
  }).isRequired,
};

export default PaymentMethods;
