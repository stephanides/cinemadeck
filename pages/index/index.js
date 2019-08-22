import React from 'react';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from './components/Header';
import About from './components/About';
import Unique from './components/Unique';
import Content from './components/Content';
import CardComposition from './components/CardComposition';
import FreeDownload from './components/FreeDownload';
import Steps from './components/Steps';
import Package from './components/Package';
import Videos from './components/Videos';
import Refund from './components/Refund';

const IndexPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome
  >
    <Header lang={lang} />
    <About lang={lang} />
    <Unique lang={lang} />
    <Content lang={lang} />
    <CardComposition lang={lang} />
    <FreeDownload lang={lang} />
    <Steps lang={lang} />
    <Package lang={lang} />
    <Videos lang={lang} />
    <Refund lang={lang} />
  </Layout>
));

export default IndexPage;
