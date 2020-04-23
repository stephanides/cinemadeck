import React from 'react';
import {
  Col, FormGroup, Input, Label, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/PaymentMethods.style';
import locale from '../../../../../shared/localisation/eshop/cart';

const PaymentMethods = ({ handleOrder, lang, order }) => {
  const { paymentMethod } = order;

  return (
    <div className="pt-5 payment-methods-container">
      <h3 className="text-uppercase mb-5">{locale[lang].methodOfPayment}</h3>
      <div className="">
        <div className="p-4 bg-white mb-5">
          <Row>
            <Col className="pr-0">
              <FormGroup check className="pt-3 pb-3">
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
              {/*
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
              */}
            </Col>
            <Col className="pl-0">
              <div className="logo-line">
                <img src="https://help.gopay.com/cs/img.php?hash=d444576a72374717c48bc311dde864a3ca0320893f55dbbb903043fe673b476c.png" alt="" />
                <img src="https://dl.dropboxusercontent.com/s/nvlzs6nk8tda2ni/mc_vrt_opt_pos_73_2x.png?dl=0" alt="" />
                {/* <img src="/static/images/payment-cards-logos.png" className="d-block ml-auto mr-3" alt="" /> */}
              </div>
              {/*
              <div className="border-bottom logo-line">
                <img src="/static/images/paypal-logo.png" alt="" />
              </div>
              */}
              <div className="pt-3 pb-3" />
            </Col>
          </Row>
        </div>
      </div>
      <style jsx>{styles}</style>
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
