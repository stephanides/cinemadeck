/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { ListGroup } from 'reactstrap';
import { graphql } from 'react-apollo';
import Pagination from 'react-js-pagination';
import { getOrdersQuery } from '../../../../graphql/query';
import Loader from '../../../../shared/components/admin/Loader';
import OrderInfo from './components/OrderInfo';

const OrderList = graphql(
  getOrdersQuery, {
    options: () => ({ variables: { ordersQuery: { offset: 0, limit: 10 } } }),
  },
)(({
  data: { error, loading, orders },
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <Loader size="sm" />;
  }

  const [activePage, setActivePage] = useState(1);
  const { items, itemsCount } = orders;

  const handleChangePage = (pageNum) => {
    setActivePage(pageNum);
  };

  return (
    <div>
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
                totalItemsCount={itemsCount}
                pageRangeDisplayed={5}
                onChange={handleChangePage}
              />
            </>
          )
          : <p className="text-center">Zatím neexistují žádné objednávky.</p>
      }
    </div>
  );
});

export default OrderList;
