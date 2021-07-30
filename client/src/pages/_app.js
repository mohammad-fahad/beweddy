import { persistor, store } from '@app/store';
import { Layout } from '@components/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'swiper/swiper.min.css';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, router, pageProps }) {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <AnimatePresence exitBeforeEnter>
          <Layout key={router.route}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
