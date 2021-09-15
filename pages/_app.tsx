import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/ThemeConfig';
import { appWithTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, updateTheme] = useState(defaultTheme);

  useEffect(() => {
    const { themeFetched = defaultTheme } = pageProps;
    if (themeFetched.id != theme.id) {
      updateTheme(themeFetched);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} updateTheme={updateTheme} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
