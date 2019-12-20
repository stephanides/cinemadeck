import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardBody, Col, Collapse, ListGroupItem, Row,
} from 'reactstrap';

const OrderInfo = ({
  data,
}) => {
  console.log(data);
  const {
    address,
    currency,
    email,
    name,
    orderNum,
    orderStatus,
    paymentMethod,
    products,
    totalPriceToPay,
  } = data;
  const [collapse, toggle] = useState(false);
  let paymentMethodResult = 'Platební kartou';

  if (paymentMethod === 1) {
    paymentMethodResult = 'Prostřednictvím Pay Pal';
  }
  if (paymentMethodResult === 2) {
    paymentMethodResult = 'Bankovním převodem';
  }

  return (
    <ListGroupItem>
      <div className="d-flex justify-content-between mb-3">
        <div>
          Objednávka č.:
          {' '}
          <em>
            {orderNum}
          </em>
        </div>
        <div>
          <Button
            color={collapse ? 'danger' : 'primary'}
            onClick={() => toggle(!collapse)}
          >
            {collapse ? 'Zavřít' : 'Info.'}
          </Button>
        </div>
      </div>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            <h6 className="border-bottom font-weight-bold pb-3 mb-3">Zákazník</h6>
            <Row className="mb-3">
              <Col>
                <p className="mb-0"><strong>Jméno a Příjmení:</strong></p>
                <p className="mb-0"><strong>e-mail:</strong></p>
              </Col>
              <Col>
                <p className="mb-0">{name}</p>
                <p className="mb-0">{email}</p>
              </Col>
            </Row>
            <h6 className="border-bottom font-weight-bold pb-3 mb-3">Dodací adresa a fakturační údaje</h6>
            <Row className="mb-3">
              <Col>
                <p className="mb-0"><strong>Ulice:</strong></p>
                <p className="mb-0"><strong>PSČ:</strong></p>
                <p className="mb-0"><strong>Město:</strong></p>
                <p className="mb-0"><strong>Stát:</strong></p>
              </Col>
              <Col>
                <p className="mb-0">{address.street}</p>
                <p className="mb-0">{address.psc}</p>
                <p className="mb-0">{address.city}</p>
                <p className="mb-0">{address.state}</p>
              </Col>
            </Row>
            <h6 className="border-bottom font-weight-bold pb-3 mb-3">Informace o objednaních produktech</h6>
            <Row className="mb-3">
              <Col>
                <strong>Zakoupené produkty:</strong>
              </Col>
              <Col>
                {
                  products.map((item) => {
                    const { count, title } = item;

                    return (
                      <p
                        className="mb-0"
                        key={title}
                      >
                        {`${count}x ${title}`}
                      </p>
                    );
                  })
                }
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <strong>Zvolená platební metoda:</strong>
              </Col>
              <Col>
                <p className="mb-0">{paymentMethodResult}</p>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                {
                  orderStatus && (orderStatus === 'CREATED')
                    ? 'Vytvořeno, nezaplaceno'
                    : (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`/static/download/invoices/${currency === 'CZK' ? 'cz' : 'en'}/invoice-${orderNum}.pdf`}
                      >
                      Faktura
                      </a>
                    )
                }
              </Col>
            </Row>
            <Row>
              <Col className="border-top pt-3">
                <p className="text-uppercase font-weight-bold">Suma a měna</p>
              </Col>
              <Col className="border-top pt-3">
                <p className="text-uppercase font-weight-bold">{`${totalPriceToPay},- ${currency}`}</p>
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
    orderStatus: PropTypes.string,
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
