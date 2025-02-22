import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const BookingLayout = ({ data, isLoading }) => {
  const paginationModel = { page: 0, pageSize: 2 };
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
    { field: "totalAmount", flex: 1, headerName: "Total amount" },
    { field: "bookingStatus", flex: 1, headerName: "Booking status" },
    { field: "paymentStatus", flex: 1, headerName: "Payment status" },
    {
      field: "action",
      flex: 1,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <section>
            {params?.row?.bookingStatus !== "Completed" && (
              <IconButton href="" target="_blank">
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              href={`/BookingDetails?bookingId=${params?.id}&carId=${params?.row.carId}`}
              target="_blank"
            >
              <RemoveRedEyeIcon />
            </IconButton>
          </section>
        );
      },
    },
  ];

  return (
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
      sx={{ border: 0 }}
    />
  );
};

export default BookingLayout;
