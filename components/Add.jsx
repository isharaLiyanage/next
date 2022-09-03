import axios from "axios";
import React, { useState } from "react";

function Add() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtraOption] = useState([]);
  const [extraOption, setExtra] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  const handleExtraInput = (e) => {
    setExtra({ ...extraOption, [e.target.name]: e.target.value });
  };
  const handleExtra = (e) => {
    setExtraOption((prev) => [...prev, extraOption]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/de0uvxaje/image/upload",
        data
      );
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extra,
        img: url,
      };
      await axios.post(
        "https://incredible-biscotti-8e24c5.netlify.app/api/product",
        newProduct
      );
      console.log("succuss");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="">
        <div className="">
          <h1>Add Product</h1>
        </div>
        <div className="">
          <label htmlFor="file">Choose an image</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className=" ml-10 outline outline-slate-700 w-40"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            rows={5}
            className=" ml-10 outline outline-slate-700 w-40"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className=" flex mt-5">
          <label htmlFor="prices">price</label>
          <input
            type="number"
            name="prices"
            id="price"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 0)}
          />
          <label htmlFor="prices">price</label>
          <input
            type="number"
            name="prices"
            id="prices"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 1)}
          />
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="prices"
            id="price"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="extra">extra</label>
          <input
            type="text"
            name="text"
            id="extra"
            className=" ml-10 outline outline-slate-700 w-40"
            onChange={handleExtraInput}
          />
          <input
            type="number"
            name="price"
            id="extraPrice"
            className=" ml-10 outline outline-slate-700 w-40"
            onChange={handleExtraInput}
          />
          <button className=" mt-5 mx-4 px-3 bg-teal-600" onClick={handleExtra}>
            ADD
          </button>
        </div>
        <div className="">
          {extra.map((option) => (
            <div className="flex flex-wrap " key={option.text}>
              <div className="mx-5">{option.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <button
          className="  my-5 mx-4 px-3 bg-yellow-400"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Add;
