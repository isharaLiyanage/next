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
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong cred");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
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
