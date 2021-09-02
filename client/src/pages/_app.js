import { persistor, store } from '@app/store';
import { Layout } from '@components/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AnimatePresence } from 'framer-motion';
import 'swiper/swiper.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, router, pageProps }) {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <AnimatePresence exitBeforeEnter>
          <Layout key={router.route}>
            <Toaster
              // position='top-right'
              reverseOrder={false}
              // toastOptions={{ style: { marginTop: '4.5rem' } }}
            />
            <Head>
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
