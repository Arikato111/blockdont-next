import { Alert } from "react-bootstrap";
import Frame from "../components/lib/Frame";
import Head from "next/head";

function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 not found</title>
      </Head>
      <Frame>
        <Alert className="my-3 text-center shadow-sm" variant="danger">
          Not found page
        </Alert>
      </Frame>
    </>
  );
}

export default ErrorPage;
