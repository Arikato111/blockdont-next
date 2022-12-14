import Head from "next/head";
import { FC } from "react";
import Frame from "../components/lib/Frame";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Frame>
        <h3 className="bg-white rounded shadow-sm p-3 my-3 text-center">
          this page is not ready
        </h3>
      </Frame>
      ;
    </>
  );
};

export default Home;
