import axios from "axios";
import Image from "next/image";
import { useState } from "react";

function Index({ orders, products }) {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivery"];
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/product/" + id);
      setProductList(productList.filter((pro) => pro._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];

    const currenStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/order/" + id, {
        status: currenStatus + 1,
        //
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" container m-auto">
      <div className="flex flex-wrap py-28 ">
        <div className=" w-1/2">
          <div className="">Products</div>
          <table>
            <tbody>
              <tr>
                <th className=" w-20">Image</th>
                <th className=" w-20">Id</th>

                <th className=" w-20">Title</th>
                <th className=" w-20">Price</th>

                <th className=" w-20">Action</th>
              </tr>
            </tbody>
            {productList.map((product) => (
              <tbody key={product._id}>
                <tr>
                  <td>
                    <div className=" relative h-9 w-9 m-auto">
                      <Image
                        alt={product.title}
                        src={product.img}
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                  </td>
                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>$ {product.prices[0]}</td>

                  <td>
                    {" "}
                    <div className="">
                      <button>Edit</button>
                      <button onClick={() => handleDelete(product._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className=" w-1/2">
          <div className="">Orders</div>
          <table>
            <tbody>
              <tr>
                <th className=" w-20">Id</th>
                <th className=" w-20">Customer</th>
                <th className=" w-20">Total</th>
                <th className=" w-20">Payment</th>
                <th className=" w-20">Status</th>
                <th className=" w-20">Action</th>
              </tr>
            </tbody>
            {orderList.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>...{order._id.slice(18, 50)}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>
                    {order.method === 0 ? (
                      <div className="">cash</div>
                    ) : (
                      <div className="">paid</div>
                    )}
                  </td>
                  <td>{status[order.status]}</td>

                  <td>
                    {" "}
                    <div className="">
                      <button onClick={() => handleStatus(order._id)}>
                        Next Stage
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies || "";

  // if (myCookie.token !== process.env.TOKEN) {
  //   return {
  //     redirect: {
  //       destination: "/admin/login",
  //       permanent: false,
  //     },
  //   };
  // }
  const productRes = await axios.get(
    "https://incredible-biscotti-8e24c5.netlify.app/api/product"
  );
  const orderRes = await axios.get(
    "https://incredible-biscotti-8e24c5.netlify.app/api/order"
  );

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
