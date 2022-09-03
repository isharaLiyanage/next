import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { useRouter } from "next/router";
import { reset } from "../../redux/cartSlice";
import OrderDetails from "../../components/OrderDetails";

function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const [comment, setComment] = useState("");
  console.log(comment);
  const cart = useSelector((state) => state.cart);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();

  // sb-aeghu19832161@personal.example.com
  // 4IVU0wa@

  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        "https://incredible-biscotti-8e24c5.netlify.app/api/order",
        data
      );

      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                comment: comment,
                method: 1,
              });
              console.log(createOrder);
            });
          }}
        />
      </>
    );
  };

  return (
    <div className=" p-5 bg-slate-200">
      <div className=" container flex m-auto flex-wrap py-24">
        <div className="  w-full md:w-5/6">
          <table>
            <thead>
              <tr>
                <th className="  w-60 ">Product</th>
                <th className="  w-60">Name</th>
                <th className="  w-20">Size</th>
                <th className="  w-60">Extras</th>
                <th className="  w-40">Price</th>
                <th className="  w-20">Quantity</th>
                <th className=" w-60 ">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr key={product._id}>
                  <th className=" w-60">
                    <div className=" relative h-9 w-9 m-auto">
                      <Image
                        alt=""
                        src={product.img}
                        objectFit="contain"
                        layout="fill"
                      />{" "}
                    </div>
                  </th>
                  <td className=" w-60 text-center  ">{product.title}</td>
                  <td className=" w-20 text-center ">{product.select}</td>

                  <td className=" w-60 text-center">
                    {product.extras.map((item) => (
                      <div className=" ml-1" key={item._id}>
                        {item.text}
                      </div>
                    ))}
                  </td>
                  <td className=" w-40 text-center">{product.price}</td>
                  <td className=" w-20 text-right ">{product.quantity}</td>
                  <td className=" w-60 text-center">
                    {product.price * product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" w-2/6 md:w-2/6  justify-center mt-4 ">
          <div className=" bg-slate-900 text-white p-5 relative">
            <h5>Card TOTAL</h5>
            <ul>
              <li>Subtotal : $ {cart.total}</li>
              <li>Discount : $0.00</li>
              <li>Total: ${cart.total}</li>
            </ul>
            {open ? (
              <div className="">
                <button
                  onClick={() => setCash(true)}
                  className=" bg-white text-blue-600   rounded my-1  text-center px-2 py-1"
                >
                  CASH ON DELIVERY
                </button>
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AQ0XDJjwQOrCY2m_XOHNYhybY4PftHo_tLA3Myzci6cUDghlbq4U3IUaREYphdN_KstPPjBLsxIzT9en",
                    components: "buttons",
                    currency: "USD",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="  bg-yellow-300 text-black text-center px-4"
              >
                CHECKOUT NOW !
              </button>
            )}
          </div>
        </div>
        <div className="  w-2/12">
          <input
            type="text"
            name="comment"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      {cash && (
        <button
          onClick={() => setCash(false)}
          className=" px-1 z-50  bg-black absolute  top-1/3 right-1/3 text-white"
        >
          esc
        </button>
      )}
      {cash && <OrderDetails total={cart.total} comment={comment} />}
    </div>
  );
}

export default Cart;
