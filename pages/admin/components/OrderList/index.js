/* eslint-disable no-underscore-dangle */
import React from 'react';
import { graphql } from 'react-apollo';
import { getOrdersQuery } from '../../../../app-data/graphql/query';
import Loader from '../../../../app-data/shared/components/admin/Loader';

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
          ? orders.map((item) => {
            console.log(item);

            return (
              <p key={item.orderNum}>
                Order
              </p>
            );
          })
          : <p className="text-center">There is no orders yet.</p>
      }
    </div>
  );
});

export default OrderList;
