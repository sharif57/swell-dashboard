import baseApi from "../api/baseApi";

export const PolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    aboutUs: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
    }),
    
    // updateProfile: builder.mutation({
    //   query: (profileData) => ({
    //     url: "/user/update-profile",
    //     method: "POST",
    //     body: profileData,
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   }),
    // }),
  }),
});

export const {
  useAboutUsQuery,
  
} = PolicyApi;
