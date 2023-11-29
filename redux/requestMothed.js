import axios from "axios";

const ISSERVER = typeof window === "undefined";

const BASE_URL = "https://next-app-mu-rust.vercel.app/api";
//  "https://next-app-mu-rust.vercel.app/api";
let TOKEN;

if (!ISSERVER) {
  const persistRoot = localStorage.getItem("persist:root");

  if (persistRoot) {
    const parsedRoot = JSON.parse(persistRoot);
    TOKEN = parsedRoot?.user?.currentUser;
  } else {
    // Handle the case where "persist:root" is not found in localStorage.
  }
}

console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
