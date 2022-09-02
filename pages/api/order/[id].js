import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   if (method === "DELETE") {
  //     try {
  //       const products = await Product.create(req.body);
  //       res.status(201).json(products);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   }
}
