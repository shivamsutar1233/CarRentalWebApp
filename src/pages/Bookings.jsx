import { DataGrid } from "@mui/x-data-grid";
import { useGetAllBookingsQuery } from "../redux/api/BookingApi";

const Bookings = () => {
  const { data, isLoading } = useGetAllBookingsQuery();
  const columns = [
    { field: "email", flex: 1, headerName: "Username" },
    { field: "carMake", flex: 1, headerName: "Car Make" },
    { field: "carModel", flex: 1, headerName: "Car Model" },
    { field: "pickupAddress", flex: 1, headerName: "Pickup address" },
    { field: "dropAddress", flex: 1, headerName: "Drop address" },
    {
      field: "startDate",
      flex: 1,
      headerName: "Start date",
      renderCell: (params) => new Date(params?.value).toUTCString(),
    },
    {
      field: "endDate",
      flex: 1,
      headerName: "End date",
      renderCell: (params) => new Date(params?.value).toUTCString(),
    },
    { field: "totalAmount", flex: 1, headerName: "Totalamount" },
    { field: "bookingStatus", flex: 1, headerName: "Booking status" },
    { field: "paymentStatus", flex: 1, headerName: "Payment status" },
  ];
  const paginationModel = { page: 0, pageSize: 2 };
  return (
    <section className="pt-20 px-6 py-6 ">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[1, 2, 5, 10, 20]}
        loading={isLoading}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </section>
  );
};

export default Bookings;
