import { DataGrid } from "@mui/x-data-grid";

import { IconButton } from "@mui/material";
import { useGetAllUserBookingsQuery } from "../redux/api/BookingApi";
import BookingLayout from "../components/Bookings/BookingLayout";
const Bookings = () => {
  const { data, isLoading } = useGetAllUserBookingsQuery();

  return (
    <section className="pt-20 px-6 py-6 ">
      <BookingLayout data={data} isLoading={isLoading} />
    </section>
  );
};

export default Bookings;
