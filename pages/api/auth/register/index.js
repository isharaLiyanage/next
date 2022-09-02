import dbConnect from "../../../../util/mongo";
import User from "../../../../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
    } catch (err) {
      res.status(501).json(err);
      console.log(err);
    }
  }
  if (method === "POST") {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // if (method === "DELETE") {
  //   try {
  //     const products = await Product.create(req.body);
  //     res.status(201).json(products);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
};
export default handler;
