import { SHA256 } from "crypto-js";
import { MongoClient } from "mongodb";

class Database {
  private Cliant: MongoClient;
  private dbname: string;
  constructor() {
    this.dbname = process.env["DB_NAME"] ?? "";
    let url: string = process.env["DB_CONNECT"] ?? "";
    this.Cliant = new MongoClient(url);
  }
  async getMembers() {
    const db = this.Cliant.db(this.dbname);
    const collection = db.collection("usr");
    const member = await collection.find({}).toArray();
    return member;
  }
  close() {
    this.Cliant.close();
  }
  async getOneMember(search = {}) {
    const collection = this.Cliant.db(this.dbname).collection("usr");
    let member = await collection.findOne(search);
    return member;
  }
  // Register for user
  async Register(
    name: string,
    address: string,
    date: string,
    email: string,
    tel: string,
    username: string,
    password: string
  ) {
    // connect database
    const db = this.Cliant.db(this.dbname);
    const usr_collec = db.collection("usr");
    // find username before register
    const usr = await usr_collec.findOne({ username: username });
    if (usr) {
      // if has this username in database it can't register
      return { status: 0, message: "This username has already used" };
    } else {
      await usr_collec.insertOne({
        name,
        address,
        date,
        email,
        tel,
        username,
        password,
      });
      return { status: 1, message: "Register success" };
    }
  }
  // Login
  async Login(username: string, password: string) {
    const Usr = this.Cliant.db(this.dbname).collection("usr");
    const Token = this.Cliant.db(this.dbname).collection("token");
    let member = await Usr.findOne({ username, password });
    if (member) {
      let token: string = SHA256(
        member.name + Math.random().toString()
      ).toString();
      await Token.insertOne({ member: member._id, token });
      return { status: 1, token };
    } else {
      return { status: 0, message: "not found" };
    }
  }
  async deleteToken(token: string) {
    const Token = this.Cliant.db(this.dbname).collection("token");
    await Token.deleteOne({ token });
    return { status: 1 };
  }
}

export default Database;
