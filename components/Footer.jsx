import img from "../public/img/unsplash.jpg";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap bg-gray-900 text-white">
        <div className=" relative  w-full h-60 sm:w-1/3 object-cover">
          <Image
            src={img}
            alt=""
            layout="fill"
            objectFit="contain"
            style={{ zIndex: "1" }}
          />
        </div>
        <div className=" sm:w-1/3 w-full pl-5">
          <h4 className=" text-sm font-bold mt-3"> Find Our Restaurant</h4>
          <ul className="  list-disc sm:list-none flex sm:block flex-wrap text-gray-500">
            <li className=" w-1/2 mt-2">
              {" "}
              205, lorem Road <br />
              NewYork, 8051 <br /> 011 - 111 3 155
            </li>
            <li className=" w-1/2 mt-2 ">
              {" "}
              205, lorem Road <br />
              NewYork, 8051 011 - 111 3 155
            </li>
            <li className=" w-1/2 mt-2">
              {" "}
              205, lorem Road <br />
              NewYork, 8051
              <br /> 011 - 111 3 155
            </li>
            <li className=" w-1/2 mt-2 ">
              {" "}
              205, lorem Road <br />
              NewYork, 8051 <br /> 011 - 111 3 155
            </li>
          </ul>
        </div>
        <div className=" w-full sm:w-1/3">
          <div className=" mt-5">
            {" "}
            <input
              type="text"
              name="email"
              id="email"
              placeholder="What we force...?"
            />{" "}
            <button className=" bg-green-700 px-3">SUBMIT</button>
          </div>
          <h4 className=" text-sm font-bold mt-3"> Working Hours</h4>
          <ul className=" list-none text-gray-500">
            <li className=" mt-2">
              {" "}
              Monday To Friday
              <br />
              9.00 a.m. - 11.00 p.m.
            </li>
            <li className=" mt-2">
              Saturday - Sunday
              <br />
              9.00 A.M. - 10.00 P.M.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
