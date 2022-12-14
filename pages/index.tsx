import { FC } from "react";
import Frame from "../components/lib/Frame";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
interface HomeInput {
  members: Array<UserForm>;
}
interface UserForm {
  _id: string;
  name: string;
}
const Index: FC<HomeInput> = (props) => {
  const members: Array<UserForm> = props.members;
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Frame>
        <h3 className="bg-white rounded shadow-sm text-center p-3 my-3">
          Index
        </h3>
        <div className="bg-white rounded shadow-sm p-3 my-3 text-center">
          <h5>try to using getServerSideProps on this page </h5>
          <h5>for testing speed</h5>
        </div>
        {members.map((usr, idx) => {
          return (
            <h5 key={idx} className="bg-white rounded text-center p-3 my-3">
              {usr.name}
            </h5>
          );
        })}
      </Frame>
    </>
  );
};

export default Index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  let host: string = req.headers.host ?? "";
  let protocal: string = process.env["SERVER_PROTOCAL"] ?? "http";
  let url: string = protocal + host;
  let members = await (await axios.get(url + "/api/member")).data;
  return {
    props: {
      members,
    },
  };
}
