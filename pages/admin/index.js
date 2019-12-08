import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../app-data/shared/components/admin/Layout';
import { redirectIfNotAuthenticated, getJwt } from '../../app-data/lib/auth';
import { getCookie } from '../../app-data/lib/auth/session';

import OrderList from '../../app-data/pages/admin/components/OrderList';

const Admin = ({ userName }) => {
  const [activePage, setActivePage] = useState(1);
  const [limit, changeLimit] = useState(10);
  const handleChangePage = (pageNum) => {
    setActivePage(pageNum);
  };

  return (
    <Layout userName={userName}>
      <OrderList
        activePage={activePage}
        changePage={handleChangePage}
        limit={limit}
      />
    </Layout>
  );
};

Admin.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getJwt(ctx);
  const userName = `${getCookie('firstName', ctx.req)} ${getCookie('lastName', ctx.req)}`;

  return {
    authenticated: !!jwt,
    userName,
  };
};

Admin.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Admin;
