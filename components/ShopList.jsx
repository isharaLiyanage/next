import ShopCard from "./ShopCard";
import styles from "../styles/ShopList.module.css";
import Link from "next/link";
const ShopList = ({ productList }) => {
  return (
    <div id="product" className=" container m-auto">
      <div className="flex justify-between w-full">
        <div className=" w-1/2">
          <div className="  text-5xl font-serif font-bold py-2">
            <h1>Popular Dishes</h1>
          </div>
        </div>
        <div className="">
          <div className="  ">
            <Link href={`./product`}>
              <button className="text-xl font-serif bg-teal-400 px-3 mt-2 font-bold py-2">
                SEE MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eligendi
        sint dolorem illo quas molestiae!
      </p>

      <div className="">
        <div className={styles.flex}>
          {productList.map(
            (product, index) =>
              index < 5 && <ShopCard product={product} key={product._id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
