
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://caddcore-web-server-code.vercel.app/api",
    // baseUrl: "",
  }),
  tagTypes: [
    "User",
    "Event",
    "Course", 
    "Seminar", 
    "Team"
  ],
  endpoints: () => ({}),
});

export default baseApi;