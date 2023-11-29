import NextCors from "nextjs-cors";
import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
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
