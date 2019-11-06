import React from 'react';
import PropTypes from 'prop-types';

// import dynamic from 'next/dynamic';
import { graphql } from 'react-apollo';
import { getProductsFromCart } from '../app-data/graphql/query';

import Layout from '../app-data/shared/components/Layout';
import Header from '../app-data/pages/index/components/Header';
// import Loader from '../../app-data/shared/components/admin/Loader';

import About from '../app-data/pages/index/components/About';
import Unique from '../app-data/pages/index/components/Unique';
import Content from '../app-data/pages/index/components/Content';
import SlideShow from '../app-data/pages/index/components/Slideshow';
import CardComposition from '../app-data/pages/index/components/CardComposition';
import FreeDownload from '../app-data/pages/index/components/FreeDownload';
import Steps from '../app-data/pages/index/components/Steps';
import Package from '../app-data/pages/index/components/Package';
import Videos from '../app-data/pages/index/components/Videos';
import FAQ from '../app-data/pages/index/components/FAQ';
import Author from '../app-data/pages/index/components/Author';
import Footer from '../app-data/pages/index/components/Footer';

/* const DynamicAbout = dynamic(
  () => import('../../app-data/pages/index/components/About'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicUnique = dynamic(
  () => import('../../app-data/pages/index/components/Unique'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicContent = dynamic(
  import('../../app-data/pages/index/components/Content'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicSlideShow = dynamic(
  import('../../app-data/pages/index/components/Slideshow'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicCardComposition = dynamic(
  import('../../app-data/pages/index/components/CardComposition'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicFreeDownload = dynamic(
  import('../../app-data/pages/index/components/FreeDownload'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicSteps = dynamic(
  import('../../app-data/pages/index/components/Steps'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicPackage = dynamic(
  import('../../app-data/pages/index/components/Package'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicVideos = dynamic(
  import('../../app-data/pages/index/components/Videos'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicRefund = dynamic(
  import('../../app-data/pages/index/components/Refund'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicFAQ = dynamic(
  import('../../app-data/pages/index/components/FAQ'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicAuthor = dynamic(
  import('../../app-data/pages/index/components/Author'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
);
const DynamicFooter = dynamic(
  import('../../app-data/pages/index/components/Footer'),
  {
    ssr: false,
    loading: () => <Loader size="xs" />,
  },
); */

const IndexPage = graphql(getProductsFromCart, { name: 'cartProducts' })(({ cartProducts: { cart = [] }, lang }) => (
  <Layout
    cart={cart}
    lang={lang}
    isHome
  >
    <Header lang={lang} />
    <About lang={lang} />
    <Unique lang={lang} />
    <Content lang={lang} />
    <SlideShow lang={lang} />
    <CardComposition lang={lang} />
    <FreeDownload lang={lang} />
    <Package lang={lang} />
    <Steps lang={lang} />
    <Videos lang={lang} />
    <FAQ lang={lang} />
    <Author lang={lang} />
    <Footer home lang={lang} />
  </Layout>
));

IndexPage.getInitialProps = async ({ query }) => {
  const { locale } = query;

  return { lang: locale };
};

IndexPage.defaultProps = {
  lang: 'cz',
};
IndexPage.propTypes = {
  lang: PropTypes.string,
};

export default IndexPage;
