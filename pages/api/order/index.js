import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.find();
      res.status(200).json(order);
    } catch (err) {
      res.status(501).json(err);
      console.log(err);
    }
  }
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
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
