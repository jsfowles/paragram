import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/typography.css';
import Head from 'next/head';
import { ThemeProvider, useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Navigation from '@components/Navigation';

function MyApp({ Component, pageProps }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
