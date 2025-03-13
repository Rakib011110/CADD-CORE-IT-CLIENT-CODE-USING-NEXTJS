
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: "",
  }),
  tagTypes: [
    "User",
    "Cart",
    "follow",
    "Shop",
    "Order",
    "Review",
    "Products",
    "VendorShop",
    "Category",
  ],
  endpoints: () => ({}),
});

export default baseApi;