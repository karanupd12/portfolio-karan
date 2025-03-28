import AnimatedBackground from '../components/AnimatedBackground';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AnimatedBackground />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;