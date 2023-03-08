import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { publicRequest } from "../redux/requestMothed";

function OrderDetails({ total, comment }) {
  console.log(comment);
  console.log(total);
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await publicRequest.post("/order", data);

      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    createOrder({ customer, address, comment: comment, total, method: 0 });
  };
  return (
    <div className=" absolute  z-40 top-0 left-0  bg-black  bg-opacity-25 w-full h-screen">
      {" "}
      <div className="  flex  justify-center items-center h-screen  ">
        <div className=" w-60 bg-slate-500 relative p-5">
          <div className="">
            {" "}
            <h3>You will pay #11</h3>
            <div className="">
              <label>Name </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
            <div className="">
              <label>number </label>
              <input
                type="text"
                name="number"
                id="number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="">
              <label>Adders </label>
              <input
                type="text"
                name="adders"
                id="adders"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="">
              <button onClick={handleClick}>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
