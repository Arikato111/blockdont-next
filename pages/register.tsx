import { FC, FormEvent, useEffect, useState } from "react";
import Head from "next/head";
import Frame from "../components/lib/Frame";
import axios from "axios";
import { getCookie } from "cookies-next";

const Logined: FC = () => {
  return (
    <>
      <Head>
        <title>register</title>
      </Head>
      <Frame>
        <div className="bg-white rounded shadow-sm p-3 my-3 text-center">
          you are now login
        </div>
      </Frame>
    </>
  );
};

const RegisterPage: FC = () => {
  const [token, setToken] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setToken(getCookie("token")?.toString() ?? "");
  }, []);
  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result = await axios.post(location.origin + "/api/register", {
      name,
      address,
      date,
      email,
      tel,
      username,
      password,
    });
    if (result.data.status === 1) {
      alert(result.data.message);
    } else {
      alert(result.data.message);
    }
  };
  if (token) {
    return Logined("");
  } else
    return (
      <>
        <Head>
          <title>Register</title>
        </Head>
        <Frame>
          <h3 className="bg-white rounded shadow-sm text-center p-3 my-3">
            Register
          </h3>
          <form
            onSubmit={onSubmitForm}
            className="bg-white rounded shadow-sm p-3 my-3"
          >
            <div>
              <input
                type="text"
                name="usr_name"
                placeholder="name"
                className="form-control mb-3"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                name="usr_address"
                placeholder="address"
                className="form-control mb-3"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <div className="input-group mb-3">
                <label className="input-group-text">birth of date</label>
                <input
                  type="date"
                  name="usr_date"
                  placeholder="birth of date"
                  className="form-control"
                  required
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <input
                type="email"
                name="usr_email"
                placeholder="email"
                className="form-control mb-3"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                name="usr_tel"
                placeholder="phone number"
                className="form-control mb-3"
                required
                onChange={(e) => setTel(e.target.value)}
                value={tel}
              />
              <input
                type="text"
                name="usr_username"
                placeholder="username"
                className="form-control mb-3"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                name="usr_password"
                placeholder="password"
                className="form-control mb-3"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="text-end">
                <button name="submit" className="btn btn-primary">
                  register
                </button>
              </div>
            </div>
          </form>
        </Frame>
      </>
    );
};

export default RegisterPage;
