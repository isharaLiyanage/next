import axios from "axios";
import Image from "next/image";

import icon03 from "../../public/img/icon/003.png";
import icon04 from "../../public/img/icon/004.png";
import icon05 from "../../public/img/icon/005.png";
import icon06 from "../../public/img/icon/006.png";
import { publicRequest } from "../../redux/requestMothed";

function Order({ Order }) {
  const status = Order.status;
  console.log(Order);
  return (
    <div className=" container m-auto py-5">
      <div className="flex justify-around flex-wrap m-auto">
        <div className=" w-full sm:w-4/6">
          <div className="flex justify-around">
            <div className="  w-1/6">
              <h6>Order ID</h6>
              <p>{Order._id.slice(0, 10)}...</p>
            </div>
            <div className="  w-1/6">
              <h6>Customer</h6>
              <p>{Order.customer} </p>
            </div>
            <div className="  w-1/6">
              <h6>Address</h6>
              <p>{Order.address}</p>
            </div>
            <div className="  w-1/6">
              <h6>Comment</h6>
              <p>{Order.comment}</p>
            </div>
            <div className="  w-1/6 text-right">
              <h6>Total</h6>
              <p>$ {Order.total}</p>
            </div>
          </div>
          <div className="">
            <div className="flex mt-5  ml-8">
              <div className=" relative  w-1/6">
                {" "}
                <div className=" ">
                  <Image
                    src={icon05}
                    alt=""
                    width={25}
                    height={25}
                    objectFit="contain"
                  />
                </div>
                payment
              </div>
              <div className=" relative   w-1/4">
                <div className={status < 1 ? "animate-pulse" : ""}>
                  <Image
                    src={icon04}
                    alt=""
                    width={25}
                    height={25}
                    objectFit="contain"
                  />
                </div>
                Preparing
              </div>
              <div className=" relative  w-1/4">
                <div className={status < 2 ? "animate-pulse" : ""}>
                  <Image
                    src={icon06}
                    alt=""
                    width={25}
                    height={25}
                    objectFit="contain"
                  />
                </div>
                On the way
              </div>
              <div className=" relative  w-1/4">
                <div className={status < 3 ? "animate-pulse" : ""}>
                  <Image
                    src={icon03}
                    alt=""
                    width={25}
                    height={25}
                    objectFit="contain"
                  />
                </div>
                Delivered
              </div>
            </div>
          </div>
        </div>
        <div className=" w-3/6 sm:w-2/6  justify-center mt-4 ">
          <div className=" bg-slate-900 text-white p-5">
            <h5>Card TOTAL</h5>
            <ul>
              <li>Subtotal : {Order.total}</li>
              <li>Discount : $0.00</li>
              <li>Total: {Order.total}</li>
            </ul>

            <div className=" bg-white text-black">PAID</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await publicRequest.get(`/order/${params.id}`);
  return {
    props: {
      Order: res.data,
    },
  };
};

export default Order;
