import { SHA256 } from "crypto-js";
import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../database/Database";

interface UserTable {
  name: string;
  address: string;
  date: string;
  email: string;
  tel: string;
  username: string;
  password: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let { name, address, date, email, tel, username, password }: UserTable =
      req.body;
    // check emty variable
    if (
      !name ||
      !address ||
      !date ||
      !email ||
      !tel ||
      !username ||
      !password
    ) {
      res.status(200).json({ status: 0, message: "error bad request" });
      res.end();
    }
    // check length of variable
    if (
      name.length > 50 ||
      address.length > 25 ||
      date.length > 50 ||
      email.length > 200 ||
      tel.length > 20 ||
      username.length > 200 ||
      password.length > 50
    ) {
      return res.status(200).json({ status: 0, message: "error info size" });
    }
    // process //
    const db = new Database();
    let result = await db.Register(
      name,
      address,
      date,
      email,
      tel,
      username,
      SHA256(password).toString() // use sha256 to hash password
    );
    // check has username used
    if (result.status !== 1) {
      return res.status(200).json(result);
    }
    // register status success
    return res
      .status(201)
      .json({ status: 1, message: "register success please login" });
  } else {
    // not found method
    return res.status(200).json({ status: 0, message: "error bad request" });
  }
}
