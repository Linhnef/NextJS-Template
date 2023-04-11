import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import "src/styles/globals.css";
import { GlobalContextProvider } from "@/components/contexts/GlobalContext";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/images/logo.webp" />
        <title>Title </title>
        <meta property="og:title" content="Title" />
        <meta name="description" content="Description" />
        <meta property="og:description" content="Description" />
        <meta name="theme-color" content="#020204" />
        <meta property="og:image" content="/images/meta-thumbnail.webp" />
        {/* <meta property="og:url" content="https://shosinsquare.com/" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </Layout>
  );
};

export default MyApp;
