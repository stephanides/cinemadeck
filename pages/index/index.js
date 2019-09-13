import React from 'react';
import dynamic from 'next/dynamic';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from '../../app-data/pages/index/components/Header';
import Loader from '../../app-data/shared/components/admin/Loader';

const DynamicAbout = dynamic(
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
);

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
