import React from "react";
import axios from "axios";
import ShopCard from "../../components/ShopCard";
import { publicRequest } from "../../redux/requestMothed";

function ProductList({ productList }) {
  return (
    <div>
      <div id="#product">
        <div className="  text-5xl font-serif font-bold py-2">
          <h1>All Product</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eligendi
          sint dolorem illo quas molestiae!
        </p>

        <div className=" container">
          <div className="flex flex-wrap  justify-evenly m-auto">
            {productList.map((product) => (
              <ShopCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
export const getServerSideProps = async () => {
  const res = await publicRequest.get("/product");
  // "https://incredible-biscotti-8e24c5.netlify.app/api/product"

  return {
    props: {
      productList: res.data,
    },
  };
};
