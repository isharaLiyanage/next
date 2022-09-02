import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const products = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const products = await Product.findByIdAndDelete(id);
      res.status(200).json("products has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
