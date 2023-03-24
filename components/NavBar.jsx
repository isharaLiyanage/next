import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import cart from "../public/img/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { logOut } from "../redux/apiCalls";
import { CartReset } from "../redux/cartSlice";

function MobileNav({ open, setOpen }) {
  const Quantity = useSelector((state) => state.cart?.quantity);

  const User = useSelector((state) => state.user?.currentUser?.username);
  const handleLogout = () => {
    logout(dispatch);
    dispatch(CartReset());
  };
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen  bg-white z-50 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter `}
    >
      <div className=" hidden  md:flex items-center justify-center filter z-50 bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          LOGO
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <div className="text-xl font-normal my-4">
          <div
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <Link className="" href={"/contact"}>
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xl font-normal  ml-4 my-4">
        <div
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <Link className="" href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      <Link href={"/user"}>
        <div
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="text-xl font-bold  ml-4 my-4"
        >
          {User ? (
            <div className=" " key={User}>
              {" "}
              {User}
              <Link href="/cart">
                <div className=" ml-10 w-6 relative hover:text-yellow-400 cursor-pointer ">
                  <Image
                    src={cart}
                    alt=""
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  <div className={styles.cartCont}>{Quantity}</div>
                </div>
              </Link>{" "}
            </div>
          ) : (
            "sign"
          )}
        </div>
      </Link>
      <div className=" relative w-9">
        <div
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <Link href="/cart">
            <div className=" ml-10 relative hover:text-yellow-400 cursor-pointer ">
              <Image
                src={cart}
                alt=""
                width={20}
                height={20}
                className="ml-4"
              />
              <div className={styles.cartCont}>{Quantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const Quantity = useSelector((state) => state.cart?.quantity);
  const User = useSelector((state) => state.user?.currentUser?.username);
  const handleLogout = () => {
    dispatch(CartReset());
    logOut(dispatch);
  };
  return (
    <nav className="flex filter drop-shadow-md  bg-orange-700 px-4 py-4 h-20 items-center justify-evenly">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="sm:w-11/12 md:w-6/12 flex justify-between">
        <h5 className=" text-xl  font-semibold  text-yellow-200">
          HotLine : <span className="  text-yellow-50">011 - 11 11 112</span>
        </h5>

        <div className="text-2xl ml-6 text-yellow-50 font-serif">
          <Link className="" href="/">
            7 STAR . COM
          </Link>
        </div>
      </div>
      <div className="sm:w-1/12 md:w-11/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <div className=" mr-3">
            {" "}
            <Link Link href={"/product"} className="">
              <a className="ml-3 text-yellow-50 hover:text-yellow-400">
                {" "}
                Product
              </a>
            </Link>{" "}
            <Link href={"/contact"}>
              <a className="ml-3 text-yellow-50  hover:text-yellow-400">
                {" "}
                Event
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="ml-3 text-yellow-50 hover:text-yellow-400">
                Contact Us
              </a>
            </Link>
            <Link href={"/about"}>
              <a className="ml-3 text-yellow-50 hover:text-yellow-400">
                About Us
              </a>
            </Link>
          </div>
          <div className="">
            <div className="ml-3 text-yellow-50 hover:text-yellow-400">
              {User ? (
                <div className=" " key={User}>
                  <Link href={"/user"}>{User}</Link>{" "}
                  <button onClick={handleLogout}>Log Out</button>
                </div>
              ) : (
                <div className="">
                  <Link href={"/login"}>Login</Link> or{" "}
                  <Link href={"/sign"}>Sign in </Link>
                </div>
              )}
            </div>
          </div>
          <Link href="/cart">
            <div className=" ml-10 relative hover:text-yellow-400 cursor-pointer ">
              <Image
                src={cart}
                alt=""
                width={20}
                height={20}
                className="ml-4"
              />
              <div className={styles.cartCont}>{Quantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
