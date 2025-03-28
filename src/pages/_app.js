import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/layouts/Layout';
import Script from 'next/script';
import "./components/Timeline.css";

const getPageTitle = (pageTitle) => {
  const defaultTitle = "Qurum Enterprise Oil & Gas Services L.L.C.";
  return pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
};

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Head>
        <title>{getPageTitle(pageProps.pageTitle)}</title>
        <meta name="google-site-verification" content="NlrBXxeF2XfP8xrTdUGvwvxUnk_HALZb_y_4PamXFfI" />
      </Head>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="assets/lib/wow/wow.min.js" strategy="beforeInteractive" />
      <Script src="assets/lib/easing/easing.min.js" strategy="beforeInteractive" />
      <Script src="assets/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
      <Script src="assets/lib/counterup/counterup.min.js" strategy="beforeInteractive" />
      <Script src="assets/js/main.js" strategy="beforeInteractive" /> 

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
    </div>
  )
}

export default MyApp;
