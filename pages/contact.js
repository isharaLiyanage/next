import React from "react";

function contact() {
  return   <div className="p-4 bg-gray-100">
  <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
  <p className="text-gray-800 mb-4">
    Want to get in touch? You can reach us at:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4">
    <li>Phone: 011 - 11 11 112 or 011- 11 11 113</li>
    <li>Email: 7Star@gmail.com</li>
    <li>Address: 123 Main St, Anytown USA</li>
  </ul>
  <p className="text-gray-800 mb-4">
    Or, use the form below to send us a message:
  </p>
  <form className="bg-white md:w-60  lg:w-96 m-auto p-4 rounded shadow-md">
    <label className="block mb-2 font-bold text-gray-700">
      Name:
      <input
        className="block w-full p-2 rounded border border-gray-400"
        type="text"
        name="name"
      />
    </label>
    <label className="block mb-2 font-bold text-gray-700">
      Email:
      <input
        className="block w-full p-2 rounded border border-gray-400"
        type="email"
        name="email"
      />
    </label>
    <label className="block mb-2 font-bold text-gray-700">
      Message:
      <textarea
        className="block w-full p-2 rounded border border-gray-400"
        name="message"
      />
    </label>
    <button
      className="block w-full p-2 rounded bg-blue-500 text-white font-bold"
      type="submit"
    >
      Send
    </button>
  </form>
</div>
}

export default contact;
