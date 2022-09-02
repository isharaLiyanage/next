import dbConnect from "../../../util/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();

  if (method === "GET") {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(1)
        : await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const products = await Product.create(req.body);
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
