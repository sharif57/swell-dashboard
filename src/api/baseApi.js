import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.0.80.44:3000/api/v1" }),
  endpoints: () => ({}),
});

export default baseApi;
