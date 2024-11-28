import axios from "axios";

const axiosGuide = axios.create({
    // baseURL: "/guide-api",
    baseURL: "https://api.spacexdata.com/v4/crew",
    headers: {
      "Content-Type": "application/json",
    },
});

export default axiosGuide;
