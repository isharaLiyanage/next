import img01s from "../../public/img/01s.png";
import img01g from "../../public/img/01g.png";
import img10 from "../../public/img/10.png";
import img02 from "../../public/img/transp.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import ShopList from "../../components/ShopList";

function Product({ product, productList }) {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [select, setSelect] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    const currantNumber = Number(number);
    const currantPrice = price + currantNumber;
    console.log(currantNumber);
    setPrice(currantPrice);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handelChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  useEffect(() => {
    if (size === 0) {
      setSelect("small");
    } else if (size === 1) {
      setSelect("medium");
    } else if (size === 2) {
      setSelect("large");
    }
  }, [size]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, select, extras, price, quantity }));
  };

  return (
    <div className="  bg-slate-300">
      <div className=" container flex flex-wrap pt-8 pb-8 m-auto">
        <div className=" w-3/4 sm:w-2/4 m-auto sm:m-0">
          <div className="relative  h-60 sm:h-full  w-full">
            {" "}
            <Image src={product.img} alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className=" w-5/6 sm:w-2/4 m-auto">
          <div className="">
            <h1 className=" font-serif font-bold text-4xl pb-3">
              {product.title}
            </h1>
          </div>
          <div className="">
            <Image
              src={img01s}
              alt="fast delivery"
              objectFit="contain"
              width={25}
              height={25}
            />
            <Image
              src={img01s}
              alt="fast delivery"
              objectFit="contain"
              width={25}
              height={25}
            />
            <Image
              src={img01s}
              alt="fast delivery"
              objectFit="contain"
              width={25}
              height={25}
            />
            <Image
              src={img01s}
              alt="fast delivery"
              objectFit="contain"
              width={25}
              height={25}
            />
            <Image
              src={img01g}
              alt="fast delivery"
              objectFit="contain"
              width={25}
              height={25}
            />
          </div>
          <h3 className=" text-slate-700 font-serif">PRICE</h3>
          <h3 className=" text-2xl ">
            <span className=" text-yellow-900">$</span>
            {price}
          </h3>

          <div className="">
            <h3 className=" font-bold text-slate-600">Description</h3>
            <p className=" text-slate-800">{product.desc}</p>
          </div>
          <h4 className=" mt-3 font-bold text-slate-600">Choose the size</h4>
          <div className=" relative flex w-full   h-11">
            <div
              className=" relative w-1/3  cursor-pointer "
              onClick={() => handleSize(0)}
            >
              <Image
                src={product.img}
                alt=""
                objectFit="contain"
                layout="fill"
              />
              <div className=" absolute top-0 right-6 bg-red-700 text-yellow-500 px-1 rounded-2xl hover:text-yellow-300">
                <div className={size === 0 ? "text-yellow-300" : ""}>Small</div>
              </div>
            </div>
            <div
              className=" relative w-1/3 cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image
                src={product.img}
                alt=""
                objectFit="contain"
                layout="fill"
              />
              <div className=" absolute top-0 right-0 bg-red-700 text-yellow-500 px-1 rounded-2xl hover:text-yellow-300">
                <div className={size === 1 ? "text-yellow-300" : ""}>
                  Medium
                </div>
              </div>
            </div>
            <div
              className=" relative w-1/3  cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image
                src={product.img}
                alt=""
                objectFit="contain"
                layout="fill"
              />
              <div className=" absolute top-0 right-0 bg-red-700 text-yellow-500 px-1 rounded-2xl hover:text-yellow-300">
                <div className={size === 2 ? "text-yellow-300" : ""}>Large</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex my-6">
              {product.extra.map((option) => (
                <div className=" mx-2" key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    onChange={(e) => handelChange(e, option)}
                    name={option.text}
                  />
                  <label htmlFor="cheese" className=" ml-1">
                    {option.text}(${option.price})
                
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <input
              type="number"
              name="cont"
              id="cont"
              className=" w-11 text-center"
              defaultValue={1}
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className=" px-6 py-1  bg-teal-600 rounded-xl mx-3 text-white"
              onClick={handleClick}
            >
              {" "}
              <Image
                src={img10}
                alt="fast delivery"
                objectFit="contain"
                width={20}
                height={20}
              />{" "}
              ADD CART
            </button>
          </div>
        </div>
      </div>

      <div className=" mx-9 py-6">
        <ul className=" list-disc">
          <li className=" ">
            {" "}
            <div className="flex">
              <div className=" ">
                <Image
                  src={img02}
                  alt="fast delivery"
                  objectFit="contain"
                  width={25}
                  height={25}
                />
              </div>
              Fast Delivery
            </div>
          </li>
          <li>
            <div className="flex">
              <div className=" ">
                <Image
                  src={img01s}
                  alt="fast delivery"
                  objectFit="contain"
                  width={25}
                  height={25}
                />
              </div>
              Money genuine back
            </div>
          </li>
        </ul>
      </div>
      <div className=" container">
        {" "}
        <ShopList productList={productList} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
<<<<<<< HEAD
    `https://incredible-biscotti-8e24c5.netlify.app/product/${params.id}`
=======
    `http://localhost:3000/api/product/${params.id}`
>>>>>>> 8c5b0a82058842ab451a92a95dc2f07f8b9f5aa8
  );
  const popularRes = await axios.get(
    "http://localhost:3000/api/product"
  );
  return {
    props: {
      product: res.data,
      productList: popularRes.data,
    },
  };
};

export default Product;
