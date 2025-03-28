import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AnimatedBackground />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp;