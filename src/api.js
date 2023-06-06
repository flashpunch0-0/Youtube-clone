import Axios from "axios";
const request = Axios.create({
  //   baseURL: "https://internship-service.onrender.com/videos?page=",
  baseURL: "https://internship-service.onrender.com/videos?",
  params: {
    page: 1,
  },
});
export default request;
