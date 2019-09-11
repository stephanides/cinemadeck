import React from 'react';
import { graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';

const ObchodnePodmienky = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome
  >
    <Container>
      <h2>Všeobecné obchodní podmínky</h2>
    </Container>
  </Layout>
));

export default ObchodnePodmienky;
