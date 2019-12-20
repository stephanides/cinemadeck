/* eslint-disable no-underscore-dangle */
import React from 'react';
// import { ListGroup } from 'reactstrap';
import { graphql } from 'react-apollo';
// import Pagination from 'react-js-pagination';
import { getOrdersQuery } from '../../../../graphql/query';
// import Loader from '../../../../shared/components/admin/Loader';
// import OrderInfo from './components/OrderInfo';

const OrderList = graphql(
  getOrdersQuery, {
    options: ({ activePage, limit }) => {
      const activeP = activePage || 1;
      const limitP = limit || 10;

      return ({
        variables: {
          ordersQuery: { offset: (activeP - 1) * limitP, limit: limitP },
        },
      });
    },
  },
)(({
  data: { error, loading, orders }, activePage, changePage,
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <>LOADING</>;
  }

  // const { items, itemsCount } = orders;
  console.log(orders);
  console.log(activePage);

  return (
    <>
      <p>LIST</p>
      {/*
        (items && items.length > 0)
          ? (
            <>
              <ListGroup>
                {
                  items.map((item) => {
                    console.log(item);
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
      */}
    </>
  );
});

export default OrderList;
