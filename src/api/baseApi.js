// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.10.98:3000/api/v1" }),
//   tagTypes:['User'],
//   endpoints: () => ({}),
// });

// export default baseApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.10.98:3000/api/v1" }),
  tagTypes: ["User", "Notification", "AboutUs", "Privacy", 'terms'], // Added all necessary tags
  endpoints: () => ({}), // Empty object for the base API setup
});

export default baseApi;
