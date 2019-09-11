import React from 'react';
import dynamic from 'next/dynamic';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from './components/Header';
// import About from './components/About';
// import Unique from './components/Unique';
// import Content from './components/Content';
// import CardComposition from './components/CardComposition';
// import FreeDownload from './components/FreeDownload';
// import Steps from './components/Steps';
// import Package from './components/Package';
// import Videos from './components/Videos';
// import Refund from './components/Refund';
// import FAQ from './components/FAQ';
// import Author from './components/Author';
// import Footer from './components/Footer';
// import Slideshow from './components/Slideshow';

const DynamicAbout = dynamic(import('./components/About'));
const DynamicUnique = dynamic(import('./components/Unique'));
const DynamicContent = dynamic(import('./components/Content'));
const DynamicSlideShow = dynamic(import('./components/Slideshow'));
const DynamicCardComposition = dynamic(import('./components/CardComposition'));
const DynamicFreeDownload = dynamic(import('./components/FreeDownload'));
const DynamicSteps = dynamic(import('./components/Steps'));
const DynamicPackage = dynamic(import('./components/Package'));
const DynamicVideos = dynamic(import('./components/Videos'));
const DynamicRefund = dynamic(import('./components/Refund'));
const DynamicFAQ = dynamic(import('./components/FAQ'));
const DynamicAuthor = dynamic(import('./components/Author'));
const DynamicFooter = dynamic(import('./components/Footer'));

const IndexPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome
  >
    <Header lang={lang} />
    <DynamicAbout lang={lang} />
    <DynamicUnique lang={lang} />
    <DynamicContent lang={lang} />
    <DynamicSlideShow lang={lang} />
    <DynamicCardComposition lang={lang} />
    <DynamicFreeDownload lang={lang} />
    <DynamicSteps lang={lang} />
    <DynamicPackage lang={lang} />
    <DynamicVideos lang={lang} />
    <DynamicRefund lang={lang} />
    <DynamicFAQ lang={lang} />
    <DynamicAuthor lang={lang} />
    <DynamicFooter />
  </Layout>
));

export default IndexPage;
