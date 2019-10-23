import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
// import { graphql } from 'react-apollo';
// import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Header from '../../app-data/pages/index/components/Header';
// import Loader from '../../app-data/shared/components/admin/Loader';

import About from '../../app-data/pages/index/components/About';
import Unique from '../../app-data/pages/index/components/Unique';
import Content from '../../app-data/pages/index/components/Content';
import SlideShow from '../../app-data/pages/index/components/Slideshow';
import CardComposition from '../../app-data/pages/index/components/CardComposition';
import FreeDownload from '../../app-data/pages/index/components/FreeDownload';
import Steps from '../../app-data/pages/index/components/Steps';
import Package from '../../app-data/pages/index/components/Package';
import Videos from '../../app-data/pages/index/components/Videos';
import FAQ from '../../app-data/pages/index/components/FAQ';
import Author from '../../app-data/pages/index/components/Author';
import Footer from '../../app-data/pages/index/components/Footer';

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

const IndexPage = ({ lang }) => {
  const [scrolled, toggleScrolled] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    const easeInCubic = (t) => (t * t * t);

    const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset, callback) => {
      const runtime = currentTime - startTime;
      let progress = runtime / duration;

      progress = Math.min(progress, 1);

      const ease = easeInCubic(progress);

      window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

      if (runtime < duration) {
        requestAnimationFrame((timestamp) => {
          const actualTime = timestamp || new Date().getTime();

          scrollToElem(startTime, actualTime, duration, scrollEndElemTop, startScrollOffset, callback);
        });
      }

      if (typeof callback === 'function') {
        callback();
      }
    };

    if (asPath.indexOf('#footer-main') > -1 && !scrolled) {
      const elemTop = document.getElementById('author').getBoundingClientRect().top;
      const stamp = new Date().getTime();

      console.log('SCROLL');
      setTimeout(() => {
        scrollToElem(stamp, stamp, 600, elemTop, window.pageYOffset, () => { toggleScrolled(true); });
      }, 500);
    }
  }, [scrolled]);

  return (
    <Layout
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
      <Steps lang={lang} />
      <Package lang={lang} />
      <Videos lang={lang} />
      <FAQ lang={lang} />
      <Author lang={lang} />
      <Footer lang={lang} />
    </Layout>
  );
};

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
