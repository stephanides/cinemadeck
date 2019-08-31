import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../app-data/shared/components/admin/Layout';
import { redirectIfNotAuthenticated, getJwt } from '../../app-data/lib/auth';
import { getCookie } from '../../app-data/lib/auth/session';

const Admin = ({ userName }) => (
  <Layout userName={userName}>
    <p>Content</p>
  </Layout>
);

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
