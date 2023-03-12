import type { NextPage } from "next";
import Head from "next/head";
import SplashBanner from "@components/landing/Splash";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jungle Cards Collection</title>
        <meta
          name="description"
          content="The home of the Jungle Cards, a collection of collectible cards featuring various junngle animals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashBanner />
    </div>
  );
};

export default Home;
