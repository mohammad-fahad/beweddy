import { persistor, store } from "@app/store";
import Script from "next/script";
import { Layout } from "@components/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import * as gtag from "@lib/gtag";

import "swiper/swiper.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";
import { useEffect, useMemo } from "react";
import { Router } from "next/router";

export const client = new QueryClient();

function MyApp({ Component, router, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const page = useMemo(() => {
    return (
      <AnimatePresence exitBeforeEnter>
        <Layout key={router.route}>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <Toaster
            // position='top-right'
            reverseOrder={false}
            // toastOptions={{ style: { marginTop: '4.5rem' } }}
          />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta name="image" content="/images/seo_image.png" />
            <meta property="og:image" content="/images/seo_image.png" />
            <meta name="twitter:image" content="/images/seo_image.png" />
          </Head>
          <Component {...pageProps} />
          {process.env.NODE_ENV !== "production" && <ReactQueryDevtools />}
        </Layout>
      </AnimatePresence>
    );
  }, [Component, pageProps]);

  return (
    <QueryClientProvider {...{ client }}>
      <Provider {...{ store }}>
        <PersistGate {...{ persistor }}>{page}</PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
