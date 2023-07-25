import axios from "axios";
console.log("AIzaSyDCtRBgRb28ogrAL4o4R5Uvh-76Cghyh0E");
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDCtRBgRb28ogrAL4o4R5Uvh-76Cghyh0E",
  },
});

export default request;
