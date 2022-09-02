import React from "react";
import img01 from "../public/img/p01.jpg";
import img02 from "../public/img/p02.jpg";
import styles from "../styles/People.module.css";
import Image from "next/image";

function People() {
  return (
    <div>
      <div className="flex w-5/6 py-8 m-auto flex-wrap  justify-around">
        <div className=" mt-1 ml-2 p-1 w-60 bg-slate-200">
          <div className=" flex items-center">
            <div className=" relative h-12  w-12 ">
              <Image
                alt=""
                src={img01}
                className={styles.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className=" font-sans ml-2"> Lorem ipsum dolor.</h1>
          </div>
          <p className=" text-center font-serif">
            &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias iure eveniet, recusandae qui veritatis quos? &quot;
          </p>
        </div>
        <div className=" mt-1 ml-2 p-1 w-60 bg-slate-200">
          <div className=" flex items-center">
            <div className=" relative h-12  w-12 ">
              <Image
                alt=""
                src={img02}
                className={styles.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className=" font-sans ml-2"> Lorem ipsum dolor.</h1>
          </div>
          <p className=" text-center font-serif">
            &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias iure eveniet, recusandae qui veritatis quos? &quot;
          </p>
        </div>
        <div className=" mt-1  ml-2 p-1 w-60 bg-slate-200">
          <div className=" flex items-center">
            <div className=" relative h-12  w-12 ">
              <Image
                alt=""
                src={img01}
                className={styles.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className=" font-sans ml-2"> Lorem ipsum dolor.</h1>
          </div>
          <p className=" text-center font-serif">
            &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias iure eveniet, recusandae qui veritatis quos? &quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
