import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/ThemeConfig';
import { appWithTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, updateTheme] = useState(defaultTheme);

  useEffect(() => {
    console.log('just 1', pageProps);
  }, []);

  console.log('a', pageProps);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} updateTheme={updateTheme} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
