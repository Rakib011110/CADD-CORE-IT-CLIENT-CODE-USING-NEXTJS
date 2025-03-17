
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: "",
  }),
  tagTypes: [
    "User",
    "Event"
  ],
  endpoints: () => ({}),
});

export default baseApi;