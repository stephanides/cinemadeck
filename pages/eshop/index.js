import React from 'react';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';

const EshopPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout lang={lang}>
    <div>{' ESHOP '}</div>
  </Layout>
));

export default EshopPage;
