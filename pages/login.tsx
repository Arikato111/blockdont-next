import { FC, FormEvent, useEffect, useState } from "react";
import Frame from "../components/lib/Frame";
import Head from "next/head";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const LoginPage: FC = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let getT = getCookie("token");
    if (getT) {
      setToken(getT.toString());
    }
  }, []);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(location.origin + "/api/login", {
      username,
      password,
    });
    if (response.data.status === 1) {
      setCookie("token", response.data.token);
      setToken(response.data.token);
    } else {
      alert("Not found username");
    }
  };
  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <Frame>
        {token ? (
          <div className="bg-white rounded shadow-sm p-3 my-3 text-center">
            you are now login
          </div>
        ) : (
          <>
            <h3 className="bg-white rounded shadow-sm text-center p-3 my-3">
              Login
            </h3>
            <form
              onSubmit={onSubmitForm}
              className="bg-white rounded shadow-sm my-3 p-3"
            >
              <input
                type="text"
                className="form-control mb-3"
                required
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                className="form-control mb-3"
                required
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="text-end">
                <button className="btn btn-primary">login</button>
              </div>
            </form>
          </>
        )}
      </Frame>
    </>
  );
};

export default LoginPage;
