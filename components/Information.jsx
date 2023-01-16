import React from "react";

function Information() {
  return (
    <div className="bg-slate-200">
      <div className="sm:flex flex-wrap justify-center m-auto gap-2 w-4/6 py-6">
        <div className=" w-80 md:w-1/3 px-3 mx-1 py-2 rounded-md bg-white">
          <h3>Healthy Food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            veniam.
          </p>
        </div>
        <div className=" w-80 md:w-1/3 px-3 mx-1 py-2 rounded-md bg-white">
          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor adipisicing elit. Nostrum, veniam.</p>
        </div>
        <div className=" w-80 md:w-1/3 px-3 mx-1 py-2 rounded-md bg-white">
          <h3>Dishes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
