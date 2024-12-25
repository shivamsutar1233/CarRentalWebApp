import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const identityApi = createApi({
  reducerPath: "identityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carental.alphasquare.in/api/identity",
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
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshUserTokenMutation,
} = identityApi;
