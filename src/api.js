import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDCtRBgRb28ogrAL4o4R5Uvh-76Cghyh0E",
  },
});

export default request;
