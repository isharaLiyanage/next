import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

function Index({ orders, products }) {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivery"];
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/product/" + id
      );
      setProductList(productList.filter((pro) => pro._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];

    const currenStatus = item.status;

    try {
      const res = await axios.put(
        "http://localhost:3000/api/order/" + id,
        {
          status: currenStatus + 1,
          //
        }
      );
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
      <div className="flex flex-col-reverse md:flex-row flex-wrap py-28 ">
        <div className="  w-1/2">
          <div className=" ml-3 text-3xl text-center">Products</div>
          <Link className="" href="/admin/product">
           <h3 className=" cursor-pointer ml-3 mt-7 bg-teal-600 text-center  w-32 ml"> Add Products </h3> 
          </Link>
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
                      <button className=" bg-green-600 px-4">Edit</button>
                      <button className=" bg-red-600 px-2" onClick={() => handleDelete(product._id)}>
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
          <div className="text-3xl text-center">Orders</div>
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
              <tbody className= {styles.highlight } key={order._id}>
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
                  <td>{ order.status >=4 ? "Done" : status[order.status] }</td>

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
  const myCookie = ctx.req?.cookies || "";

  // if (myCookie.token !== process.env.TOKEN) {
  //   return {
  //     redirect: {
  //       destination: "/admin/login",
  //       permanent: false,
  //     },
  //   };
  // }
  const productRes = await axios.get(
    "http://localhost:3000/api/product"
  );
  const orderRes = await axios.get(
    "http://localhost:3000/api/order"
  );

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
