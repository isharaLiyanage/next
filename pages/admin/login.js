import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/Login"),
        {
          username,
          password,
        };
      router.push("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className=" flex my-16 justify-center items-center">
      <div className="">
        <div className="  text-center">
          <h1 className=" font-bold text-lg">Admin Dashboard</h1>
        </div>
        <div className=" my-4   ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="  outline-4  outline outline-neutral-400"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=" my-4   ">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className=" outline-4  outline outline-neutral-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex w-full justify-center">
          {" "}
          <button
            className="  px-16  py-2  bg-teal-600"
            onClick={handleClick}
          >
            {" "}
            Sign In
          </button>
          {error && (
            <div className="px-16  py-2  bg-red-700"> Something Wrong</div>
          )}
        </div>{" "}
      </div>
    </div>
  );
}

export default Login;
