/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="static/css/bootstrap/bootstrap.min.css" />
        </Head>
        <body>
          <Main />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" />
          <style dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: ProximaNova-Bold;
              src: url(/static/fonts/ProximaNova-Bold.otf);
              font-display: swap;
            }
            @font-face {
              font-family: ProximaNova-Semibold;
              src: url(/static/fonts/ProximaNova-Semibold.otf);
              font-display: swap;
            }
            @font-face {
              font-family: ProximaNova-Regular;
              src: url(/static/fonts/ProximaNova-Regular.otf);
              font-display: swap;
            }
            @font-face {
              font-family: ProximaNova-Light;
              src: url(/static/fonts/ProximaNova-Light.otf);
              font-display: swap;
            }
          `,
          }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
