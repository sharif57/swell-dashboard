// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import baseApi from "../api/baseApi";

// export const userApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     fetchUsers: builder.query({
//       query: () => ({
//         url: "/user/all-user",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }),
//     }),

//     notification: builder.query({
//       query: () => ({
//         url: "/notification",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }),
//     }),

//     loginInfo: builder.query({
//       query: () => ({
//         url: "/auth/login",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("user")}`,
//         },
//       }),
//     }),

//     updateProfile: builder.mutation({
//       query: (profileData) => ({
//         url: "/user/update-profile",
//         method: "POST",
//         body: profileData,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }),
//     }),

//   }),
// });

// export const { useFetchUsersQuery, useNotificationQuery, useLoginInfoQuery, useUpdateProfileMutation } = userApi;

import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    notification: builder.query({
      query: () => ({
        url: "/notification",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    loginInfo: builder.query({
      query: () => ({
        url: "/auth/login",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }),
    }),
    adminProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/user/update-profile",
        method: "POST",
        body: profileData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useNotificationQuery,
  useLoginInfoQuery,
  useUpdateProfileMutation,
  useAdminProfileQuery,
} = userApi;
