/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ListGroup } from 'reactstrap';
import { graphql } from 'react-apollo';
import { getOrdersQuery } from '../../../../graphql/query';
import Loader from '../../../../shared/components/admin/Loader';
import OrderInfo from './components/OrderInfo';

const OrderList = graphql(
  getOrdersQuery,
)(({ data: { error, loading, orders } }) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <Loader size="sm" />;
  }

  return (
    <div>
      {
        orders && orders.length > 0
          ? (
            <ListGroup>
              {
                orders.map((item) => {
                  const { orderNum } = item;

                  return <OrderInfo data={item} key={orderNum} />;
                })
              }
            </ListGroup>
          )
          : <p className="text-center">There is no orders yet.</p>
      }
    </div>
  );
});

export default OrderList;
