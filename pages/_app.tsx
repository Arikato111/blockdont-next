import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Heading from "../components/Heading";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#5298ff" height={2} showOnShallow={false} />
      <Heading />
      <Component {...pageProps} />
    </>
  );
}
