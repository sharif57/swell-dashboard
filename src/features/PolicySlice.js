import baseApi from "../api/baseApi";

export const PolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch About Us Content
    aboutUs: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    // Update About Us Content
    updateAbout: builder.mutation({
      query: (updatedData) => ({
        url: "/about/update-about",
        method: "POST",
        body: updatedData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    // Fetch Privacy Policy Content
    privacy: builder.query({
      query: () => ({
        url: "/privacy",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    // Update Privacy Policy Content
    updatePrivacy: builder.mutation({
      query: (updatedData) => ({
        url: "/privacy/update-privacy",
        method: "POST",
        body: updatedData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

// Exporting hooks generated by RTK Query
export const {
  useAboutUsQuery,
  useUpdateAboutMutation,
  usePrivacyQuery,
  useUpdatePrivacyMutation,
} = PolicyApi;
