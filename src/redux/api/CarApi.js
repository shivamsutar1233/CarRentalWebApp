import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "car-rental-web-g4h8g7habmawhhcr.centralindia-01.azurewebsites.net/api/cars",
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
