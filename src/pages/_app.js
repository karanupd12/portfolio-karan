import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
    </>
  );
}

export default MyApp;