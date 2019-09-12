import React from 'react';
import dynamic from 'next/dynamic';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from '../../app-data/pages/index/components/Header';

const DynamicAbout = dynamic(import('../../app-data/pages/index/components/About'));
const DynamicUnique = dynamic(import('../../app-data/pages/index/components/Unique'));
const DynamicContent = dynamic(import('../../app-data/pages/index/components/Content'));
const DynamicSlideShow = dynamic(import('../../app-data/pages/index/components/Slideshow'));
const DynamicCardComposition = dynamic(import('../../app-data/pages/index/components/CardComposition'));
const DynamicFreeDownload = dynamic(import('../../app-data/pages/index/components/FreeDownload'));
const DynamicSteps = dynamic(import('../../app-data/pages/index/components/Steps'));
const DynamicPackage = dynamic(import('../../app-data/pages/index/components/Package'));
const DynamicVideos = dynamic(import('../../app-data/pages/index/components/Videos'));
const DynamicRefund = dynamic(import('../../app-data/pages/index/components/Refund'));
const DynamicFAQ = dynamic(import('../../app-data/pages/index/components/FAQ'));
const DynamicAuthor = dynamic(import('../../app-data/pages/index/components/Author'));
const DynamicFooter = dynamic(import('../../app-data/pages/index/components/Footer'));

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
