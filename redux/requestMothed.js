import axios from "axios";

const ISSERVER = typeof window === "undefined";

const BASE_URL = "https://next-iobgmczff-isharaliyanage.vercel.app/api/";
let TOKEN;
if (!ISSERVER) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser
    ? `${
        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.accessToken
      }`
    : "";
}
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
