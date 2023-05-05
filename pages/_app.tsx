import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppProps } from "next/app";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return (

    <Layout>

      <Component {...pageProps} />
    </Layout>
    )
  }