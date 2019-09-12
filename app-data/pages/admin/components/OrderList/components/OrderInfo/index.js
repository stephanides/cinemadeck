/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardBody, Col, Collapse, ListGroupItem, Row,
} from 'reactstrap';

const OrderInfo = ({
  data: {
    address,
    currency,
    email,
    name,
    orderNum,
    paymentMethod,
    products,
    totalPriceToPay,
  },
}) => {
  const [collapse, toggle] = useState(false);

  return (
    <ListGroupItem>
      <div className="d-flex justify-content-between mb-3">
        <div>
          Objednávka č.
          {' '}
          {orderNum}
        </div>
        <div>
          <Button
            color="primary"
            onClick={() => toggle(!collapse)}
          >
            Info.
          </Button>
        </div>
      </div>
      {''}
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            <Row className="mb-3">
              <Col>
                <strong>Zákazník:</strong>
              </Col>
              <Col>
                <p className="mb-0">{name}</p>
                <p className="mb-0">{email}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <strong>Fakturační adresa:</strong>
              </Col>
              <Col>
                <p className="mb-0">{address.street}</p>
                <p className="mb-0">{address.psc}</p>
                <p className="mb-0">{address.city}</p>
                <p className="mb-0">{address.state}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <strong>Zakoupené produkty:</strong>
              </Col>
              <Col>
                {
                  products.map((item) => {
                    const { count, title } = item;

                    return (
                      <p className="mb-0" key={title}>{`${count}x ${title}`}</p>
                    );
                  })
                }
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <strong>Uhrazeno:</strong>
              </Col>
              <Col>
                {
                  paymentMethod > 0 ? (
                    paymentMethod < 2 ? 'Prostřednictvím Pay Pal' : 'Bankovním převodem'
                  ) : 'Platební kartou'
                }
              </Col>
            </Row>
            <Row>
              <Col className="border-top pt-3">
                <p className="text-uppercase font-weight-bold">Suma</p>
              </Col>
              <Col className="border-top pt-3">
                <p className="text-uppercase font-weight-bold">{`${totalPriceToPay} ${currency}`}</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Collapse>
    </ListGroupItem>
  );
};

OrderInfo.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string,
      psc: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
    }),
    currency: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    orderNum: PropTypes.string,
    paymentMethod: PropTypes.number,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number,
        price: PropTypes.number,
        title: PropTypes.string,
        totalPrice: PropTypes.number,
      }),
    ),
    totalPriceToPay: PropTypes.number,
  }).isRequired,
};

export default OrderInfo;
