import { SHA256 } from "crypto-js";
import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../database/Database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check method
  if (req.method === "POST") {
    let { username, password } = req.body;
    // check emty
    if (!username || !password)
      return res.status(200).json({ status: 0, message: "error info" });

    const db = new Database();
    const result = await db.Login(username, SHA256(password).toString());
    if (result.status === 1) {
      return res
        .status(200)
        .json({ status: 1, message: "login success", token: result.token });
    } else {
      return res.status(200).json({ status: 0, message: result.message });
    }
  } else {
    // not found method
    return res.status(200).json({ status: 0, message: "bad request" });
  }
}
