import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://car-rental-web-g4h8g7habmawhhcr.centralindia-01.azurewebsites.net/api/Booking",
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
    getAllUserBookings: builder.query({
      query: (queryParams = "") => ({
        url: `/GetAllBookingForUser?${queryParams}`,
      }),
    }),
    getBookingById: builder.query({
      query: (queryParams = "") => ({
        url: `/GetBookingById?bookingId=${queryParams}`,
      }),
    }),
  }),
});

export const {
  useSaveBookingMutation,
  useGetAllBookingsQuery,
  useGetAllUserBookingsQuery,
  useGetBookingByIdQuery,
} = bookingApi;
