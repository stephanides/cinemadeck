import React from 'react';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from './components/Header';
import About from './components/About';
import Unique from './components/Unique';

const IndexPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout lang={lang}>
    <Header lang={lang} />
    <About lang={lang} />
    <Unique lang={lang} />
  </Layout>
));

export default IndexPage;
