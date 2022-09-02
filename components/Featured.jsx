import Image from "next/image";
import { useState } from "react";
import img01 from "../public/img/01.png";
import img02 from "../public/img/02.png";
import img08 from "../public/img/08.png";
import imgLeft from "../public/img/r.png";
import imgRight from "../public/img/ri.png";
import styles from "../styles/Featured.module.css";

function Featured() {
  const [index, setIndex] = useState(0);

  const handleArrow = (dir) => {
    if (dir === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (dir === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="  bg-slate-300 pt-10 w-full">
      <div className="  relative m-auto">
        <div className=" w-full  overflow-hidden h-full  ">
          <div className={styles.arrowLeft} onClick={() => handleArrow("l")}>
            <Image src={imgLeft} layout="fill" alt="" objectFit="contain" />
          </div>
          {/* <div className={styles.transform}> */}
          <div
            className={styles.flex}
            style={{
              transform: `translateX(${-100 * index}%)`,
              transition: "all 1s ease-in-out",
            }}
          >
            {" "}
            <div className={styles.item}>
              <div className={styles.itemWidth}>
                <div className="flex justify-around items-center  flex-wrap text-center">
                  <div className=" font-bold md:w-3/6  w-5/6">
                    <h5 className="sm:text-7xl text-5xl text-right ml-3">
                      Special tasty <br /> Burger
                    </h5>

                    <p className="   text-right mt-2 sm:w-96 m-auto break-all whitespace-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis quae inventore dolorem provident, quasi porro.
                    </p>
                  </div>
                  <div className=" md:w-3/6  w-5/6  h-60  sm:h-screen lg:h-96">
                    <div className=" w-full h-full relative">
                      <div className=" absolute top-1/2 left-0  px-5  py-1 rounded-md  bg-white z-20">
                        {" "}
                        <h5>Only</h5>{" "}
                        <p className="  text-red-900  font-bold text-5xl">
                          $5.00
                        </p>
                      </div>
                      <Image
                        src={img08}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemWidth}>
                <div className="flex justify-around items-center  flex-wrap text-center">
                  <div className=" font-bold md:w-3/6  w-4/6">
                    <h5 className="  sm:text-7xl text-5xl text-right ml-3">
                      Special tasty <br /> Cheese Pizza
                    </h5>

                    <p className="   text-right mt-2 sm:w-96 m-auto break-all whitespace-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      Officiis quae inventore dolorem provident, quasi porro.
                    </p>
                  </div>
                  <div className=" md:w-3/6  w-5/6 h-60  sm:h-screen lg:h-96">
                    <div className=" w-full h-full relative">
                      <div className=" absolute top-1/2 left-0  px-5  py-1 rounded-md  bg-white z-20">
                        {" "}
                        <h5>Only</h5>{" "}
                        <p className="  text-red-900  font-bold text-5xl">
                          $5.00
                        </p>
                      </div>
                      <Image
                        src={img02}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemWidth}>
                <div className="flex justify-around items-center  flex-wrap text-center">
                  <div className=" font-bold md:w-3/6  w-4/6">
                    <h5 className="  sm:text-7xl text-5xl text-right ml-3">
                      Special tasty <br /> Pizza
                    </h5>

                    <p className="   text-right mt-2 sm:w-96 m-auto break-all whitespace-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      Officiis quae inventore dolorem provident, quasi porro.
                    </p>
                  </div>
                  <div className=" md:w-3/6  w-5/6 h-60  sm:h-screen lg:h-96">
                    <div className=" w-full h-full relative">
                      <div className=" absolute top-1/2 left-0  px-5  py-1 rounded-md  bg-white z-20">
                        {" "}
                        <h5>Only</h5>{" "}
                        <p className="  text-red-900  font-bold text-5xl">
                          $5.00
                        </p>
                      </div>
                      <Image
                        src={img01}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowRight} onClick={() => handleArrow("r")}>
          <Image src={imgRight} layout="fill" alt="" objectFit="contain" />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Featured;
