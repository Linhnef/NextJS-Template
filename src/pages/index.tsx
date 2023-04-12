import type { NextPage } from "next";
import Head from "next/head";
import Home from "src/screens/home";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Linh Dev - Next 13 Template</title>
        <meta
          name="description"
          content="NextJs starter template using TypeScript and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Home />
      </section>
    </>
  );
};

export default Index;
