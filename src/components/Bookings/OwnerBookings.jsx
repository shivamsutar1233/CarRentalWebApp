import React from "react";
import BookingLayout from "./BookingLayout";
import { useGetAllOwnerBookingsQuery } from "../../redux/api/BookingApi";

const OwnerBookings = () => {
  const { data, isLoading } = useGetAllOwnerBookingsQuery();
  return <BookingLayout data={data} isLoading={isLoading} />;
};

export default OwnerBookings;
