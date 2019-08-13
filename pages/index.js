import React from 'react';
import Layout from '../app-data/shared/components/Layout';
import Header from '../app-data/shared/components/Header';
import About from '../app-data/shared/components/About';
import Unique from '../app-data/shared/components/Unique';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Unique />
  </Layout>
);

export default IndexPage;
