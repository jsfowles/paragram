import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/typography.css';
import Head from 'next/head';
import { ThemeProvider, useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="FairfieldLTStd-Light.woff2"
          as="font"
          type="font/woff2"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} key={router.route} />
      <Footer />
    </>
  );
}

export default MyApp;
