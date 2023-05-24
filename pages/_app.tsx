import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { ReactElement, ReactNode } from "react";
import { NextPage } from 'next'
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}