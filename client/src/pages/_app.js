import { persistor, store } from '@app/store';
import { Layout } from '@components/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'swiper/swiper.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
