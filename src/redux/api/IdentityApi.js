import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const identityApi = createApi({
  reducerPath: "identityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carental.alphasquare.in/api/identity",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: `register`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
    }),
    refreshUserToken: builder.mutation({
      query: (body) => ({
        url: `refresh`,
        method: "POST",
        body,
      }),
    }),
    getUserPreferences: builder.query({
      query: () => ({
        url: `GetUserPreferences`,
        method: "GET",
      }),
    }),
    updateUserPreferences: builder.mutation({
      query: (body) => ({
        url: `UpdateUserPreferences`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshUserTokenMutation,
  useLazyGetUserPreferencesQuery,
  useUpdateUserPreferencesMutation,
} = identityApi;
