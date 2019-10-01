import React from 'react';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Terms from '../../app-data/pages/obchodni-podminky/components/Terms';

const ObchodnePodmienky = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome
  >
    <Terms lang={lang} />
  </Layout>
));

export default ObchodnePodmienky;
