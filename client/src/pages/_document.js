import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='image' content='/seo_image.png' />
          <meta
            property='title'
            content='BeWeddy | Free All-in-One Wedding Platform'
          />
          <meta
            name='description'
            content='Free Services:
                    1. Create a website with your spouse-to-be!
                    2. Generate a contact list. (We need your address. Collect Addresses, E-mails, phone numbers and more)
                    3. Text invitations and announcements!
                    '
          />
          <meta
            property='og:title'
            content='BeWeddy | Free All-in-One Wedding Platform'
          />
          <meta
            property='og:description'
            content='Free Services:
                    1. Create a website with your spouse-to-be!
                    2. Generate a contact list. (We need your address. Collect Addresses, E-mails, phone numbers and more)
                    3. Text invitations and announcements!
                    '
          />
          <meta property='og:image' content='/seo_image.png' />
          <meta property='og:url' content='' />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@MuttakinHasib' />
          <meta
            name='twitter:title'
            content='Free Services:
                    1. Create a website with your spouse-to-be!
                    2. Generate a contact list. (We need your address. Collect Addresses, E-mails, phone numbers and more)
                    3. Text invitations and announcements!
                    '
          />
          <meta
            name='twitter:description'
            content='Free All-in-One Wedding Platform'
          />
          <meta name='twitter:image' content='/seo_image.png' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <script
            src='https://apis.google.com/js/api.js'
            type='text/javascript'
          ></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Alice&family=Inter:wght@100;200;300;400;500;600;700&family=Poppins:wght@700&display=swap'
            rel='stylesheet'
          />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
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
