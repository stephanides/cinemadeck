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
            <Row>
              <Col>
                <strong>Zákazník:</strong>
              </Col>
              <Col>{name}</Col>
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
