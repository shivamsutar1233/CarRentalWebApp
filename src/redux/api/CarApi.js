import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://car-rental-web-g4h8g7habmawhhcr.centralindia-01.azurewebsites.net/api/cars",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
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
    saveCar: builder.mutation({
      query: (body) => ({
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetApplicationCarsQuery,
  useGetCarByIdQuery,
  useLazyGetCarByIdQuery,
  useSaveCarMutation,
} = carApi;
