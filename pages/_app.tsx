import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import '@styles/main.css';

import { ThemeProvider } from 'next-themes';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
