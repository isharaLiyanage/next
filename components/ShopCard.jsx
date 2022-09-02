import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ShopCart.module.css";

function ShopCard({ product }) {
  return (
    <div className={styles.start}>
      <div className=" container p-3  bg-slate-100 ">
        <div className=" text-center w-64">
          <Link href={`product/${product._id}`}>
            <Image src={product.img} alt="" width={200} height={200} />
          </Link>
          <div className=" text-lg text-red-600 ">
            <h3> {product.title}</h3>
          </div>
          <div className=" text-left text-slate-600 relative ">
            <div className={styles.hover}>
              <p className=" hoverItem h-12  break-all whitespace-normal ">
                {product.desc.slice(0, 60)} {"...."}
              </p>
            </div>

            <div className={styles.hoverItem}>
              <div className=" absolute bg-fuchsia-600 bg-opacity-90 text-white border-l-fuchsia-300 border">
                <p>{product.desc}</p>
              </div>
            </div>
          </div>
          <div className=" bg-orange-400 m-2 hover:bg-orange-500 cursor-pointer ">
            {" "}
            <Link passHref href={`product/${product._id}`}>
              <div className=""> $ {product.prices[0]}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
