import Database from "../../database/Database";
import type { NextApiRequest, NextApiResponse } from "next";
import { WithId, Document } from "mongodb";

type Data = {
  member: WithId<Document>[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // GET METHOD
    const db = new Database();
    const members: WithId<Document>[] = await db.getMembers();
    db.close();
    res.status(200).json(members);
    res.end();
  } else {
    // IF NO METHOD
    res.status(400).end();
  }
}
