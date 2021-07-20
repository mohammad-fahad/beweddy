import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <meta name='image' content='/images/seo_image.png' /> */}
          <meta property='title' content='BeWeddy' />
          <meta name='description' content='' />
          <meta property='og:title' content='' />
          <meta property='og:description' content='' />
          {/* <meta property='og:image' content='/images/seo_image.png' /> */}
          <meta property='og:url' content='' />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@MuttakinHasib' />
          <meta name='twitter:title' content='' />
          <meta name='twitter:description' content='' />
          {/* <meta name='twitter:image' content='/images/seo_image.png' /> */}

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Alice&family=Inter:wght@100;200;300;400;500;600;700&family=Poppins:wght@700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
