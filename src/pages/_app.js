import AnimatedBackground from '../components/AnimatedBackground';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <AnimatedBackground />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;