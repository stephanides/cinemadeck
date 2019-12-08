/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ListGroup } from 'reactstrap';
import { graphql } from 'react-apollo';
import Pagination from 'react-js-pagination';
import { getOrdersQuery } from '../../../../graphql/query';
import Loader from '../../../../shared/components/admin/Loader';
import OrderInfo from './components/OrderInfo';

const OrderList = graphql(
  getOrdersQuery, {
    options: ({ activePage, limit }) => ({
      variables: {
        ordersQuery: { offset: (activePage - 1) * limit, limit },
      },
    }),
  },
)(({
  data: { error, loading, orders }, activePage, changePage,
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <Loader size="sm" />;
  }

  const { items, itemsCount } = orders;

  return (
    <>
      {
        (items && items.length > 0)
          ? (
            <>
              <ListGroup>
                {
                  items.map((item) => {
                    const { orderNum } = item;

                    return (
                      <OrderInfo
                        data={item}
                        key={orderNum}
                      />
                    );
                  })
                }
              </ListGroup>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                itemClass="page-item"
                totalItemsCount={itemsCount}
                pageRangeDisplayed={5}
                onChange={changePage}
              />
            </>
          )
          : <p className="text-center">Zatím neexistují žádné objednávky.</p>
      }
    </>
  );
});

export default OrderList;
