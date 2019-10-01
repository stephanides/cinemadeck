import React from 'react';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Gdpr from '../../app-data/pages/gdpr/components/Gdpr';

const OchranaUdajov = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome
  >
    <Gdpr lang={lang} />
  </Layout>
));

export default OchranaUdajov;
