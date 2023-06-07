import request from "../../api";
export const getApiVideos = async () => {
  const apidata = request();
  console.log(apidata);
  // return apidata
};
