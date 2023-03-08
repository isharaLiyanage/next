import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../redux/apiCalls";
import { publicRequest } from "../../redux/requestMothed";

function User({}) {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const User = useSelector((state) => state.user.currentUser);

  async function getData() {
    const response = await publicRequest.get(`/order/${User._id}`);

    return response.data;
  }

  const orders = getData();
  console.log(orders);
  if (User._id) {
  } else {
    Router.push("./login");
  }
  const handleStatus = async (id) => {
    const userId = id;
    let username;
    if (name) {
      username = name;
    } else {
      username = User.username;
    }

    let email;
    if (Email) {
      email = Email;
    } else {
      email = User.email;
    }
    let address;
    if (Address) {
      address = Address;
    } else {
      address = User.address;
    }
    let phone;
    if (Phone) {
      phone = Phone;
    } else {
      phone = User.phone;
    }

    const putData = {
      username,
      address,
      email,
      phone,
    };
    console.log(putData);
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/de0uvxaje/image/upload",
          data
        );

        const { url } = uploadRes.data;
        const user = { ...putData, img: url };
        updateUser(userId, user, dispatch);
      } catch (err) {
        console.log(err);
      }

      console.log("succuss");
    } else {
      const user = { ...putData };
      updateUser(userId, user, dispatch);
    }
  };
  return (
    <div>
      <div className=" py-40 m-auto w-96">
        <ul>
          <li>ID : {User._id}</li>

          <li>
            Name :{" "}
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setName(e.target.value)}
              placeholder={User.username}
            />
          </li>
          <li>
            Email :{" "}
            <input
              type="email"
              name="email"
              id="email"
              className=" mx-10 my-3 outline outline-slate-700 w-40"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={User.email}
            />
          </li>
          <li>
            phone:{" "}
            <input
              type="number"
              name="phone"
              id="phone"
              className=" mx-10 my-3 outline outline-slate-700 w-40"
              placeholder={User.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </li>
          <li>
            address:{" "}
            <input
              type="text"
              name="address"
              id="address"
              placeholder={User.address}
              className=" mx-10 my-3 outline outline-slate-700 w-40"
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
            image:{" "}
            <input
              type="file"
              name="phone"
              id="phone"
              className=" mx-10 outline outline-slate-700 w-40"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </li>
          <li className=" relative w-7 h-9">
            {" "}
            <Image
              src={file ? URL.createObjectURL(file) : ""}
              alt=""
              objectFit="contain"
              layout="fill"
              className="productUploadImg"
            />
          </li>
          <li></li>
        </ul>
        <button
          className=" bg-teal-800 px-4 text-white"
          onClick={() => handleStatus(User._id)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default User;
