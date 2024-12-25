import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "cari",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carental.alphasquare.in/api/cars",
  }),
  endpoints: (builder) => ({
    getApplicationCars: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useGetApplicationCarsQuery, useGetCarByIdQuery } = carApi;
