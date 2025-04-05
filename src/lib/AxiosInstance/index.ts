import config from "@/config";
import axios from "axios";
import { cookies } from "next/headers";





export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
  }); 

  axiosInstance.interceptors.request.use(
   async function (config) {
      const cookieStore = cookies();
      const accessToken = (await cookieStore).get("accessToken")?.value;
  
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  ); 



  axiosInstance.interceptors.request.use(
   async function (config) {
      const cookieStore = cookies();
      const accessToken = (await cookieStore).get("accessToken")?.value;
  
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );