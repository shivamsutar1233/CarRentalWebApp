import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carental.alphasquare.in/api/Booking",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    saveBooking: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: "POST",
        body,
      }),
    }),
    getAllBookings: builder.query({
      query: (queryParams = "") => ({
        url: `/getAllBookings?${queryParams}`,
      }),
    }),
  }),
});

export const { useSaveBookingMutation, useGetAllBookingsQuery } = bookingApi;
