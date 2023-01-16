import axios from "axios";
import React, { useState } from "react";

function Add() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  
  const [extra, setExtraOption] = useState([]);
  const [extraOption, setExtra] = useState([]);
  const [done, setDone] = useState(false);




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
        "http://localhost:3000/api/product",
        newProduct
      );
      setDone(true);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
      <div className=" ml-5">
        <div className="">
          <h1 className=" text-center text-lg font-bold">Add Product</h1>
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
        <div className=" flex flex-wrap mt-5">
          <div className="flex mt-2">
          <label htmlFor="prices">Price</label>
          <input
            type="number"
            name="prices"
            id="price"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 0)}
          />
          </div>
          <div className="flex mt-2">

          <label htmlFor="prices">Price</label>
          <input
            type="number"
            name="prices"
            id="prices"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 1)}
          />
          </div>
          <div className="flex mt-2">

          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="prices"
            id="price"
            className=" mx-10 outline outline-slate-700 w-40"
            onChange={(e) => changePrice(e, 2)}
          />
          </div>
        </div>
        <div className="mt-5 ">
          <label htmlFor="extra">Extra</label>
          <input
            type="text"
            name="text"
            id="extra"
            className=" ml-10 outline outline-slate-700 w-40"
            onChange={handleExtraInput}
          />
          <label htmlFor="extraPrice " className=" ml-2">Price</label>
          <input
            type="number"
            name="extraPrice"
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
            <div className="flex flex-wrap  mt-5" key={option.text}>
              <div className="mx-5">{option.text}</div>       
              <div className="mx-5">$ {option.extraPrice}</div>

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
       {done ?(
        
          <h6 className=" w-24 my-5 mx-4 px-3  bg-amber-200 "  >
         Uploaded
        </h6>):'' }
      </div>
    </div>
  );
}

export default Add;

