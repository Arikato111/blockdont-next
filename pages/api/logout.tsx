import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../database/Database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let { token } = req.body;
    // check null token
    if (!token) {
      res.status(200).json({ status: 0, message: "not found token" });
      res.end();
    }
    const db = new Database();
    db.deleteToken(token);
    db.close();
    res.status(200).json({ status: 1, message: "delete token success" });
    res.end();
  } else {
    // if not found method
    res.status(200).json({ status: 0, message: "not found token" });
    res.end();
  }
}
