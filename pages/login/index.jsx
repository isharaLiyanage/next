import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import Router from "next/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.user?.error);
  const success = useSelector((state) => state.user?.currentUser?.username);

  if (success) {
    Router.push("./");
  }

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="">
      <div className=" container relative ">
        <div className=" py-6 ">
          <div className="   w-2/4 m-auto items-center outline outline-1 outline-slate-600">
            <form className="mt-auto mb-auto">
              <h2 className=" text-center py-6 font-bold">Log IN </h2>
              <div className=" flex  justify-evenly">
                <div className="">
                  <label htmlFor="floatingInput">User Name</label>
                </div>

                <div className="">
                  <input
                    type="text"
                    placeholder="User Name"
                    className="outline outline-1 outline-slate-600 "
                    aria-label="user "
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className=" flex justify-evenly mt-6 ">
                <div className="">
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="outline outline-1 outline-slate-600 ml-3 "
                    aria-label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className=" flex pb-6 w-full justify-center">
                {" "}
                <button
                  onClick={handleClick}
                  className=" bg-teal-700 px-10 rounded-sm mt-3 text-white"
                >
                  Login in
                </button>
              </div>
              <div className="flex">
                <div className=" w-full">
                  {error && (
                    <div className="mt-3 text-red-500">Something Wrong...</div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
