import { Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const UsersLayout = ({ data, isLoading }) => {
  const paginationModel = { page: 0, pageSize: 2 };
  const profileCellRenderer = (params) => {
    const { value } = params;
    return (
      <section className=" flex items-center justify-center">
        <Avatar src={value} alt="profile not found" />
      </section>
    );
  };
  const columns = [
    {
      field: "profile",
      flex: 1,
      headerName: "Profile",
      renderCell: profileCellRenderer,
      maxWidth: 100,
    },
    { field: "email", flex: 1, headerName: "Username" },
    { field: "firstName", flex: 1, headerName: "FirstName" },
    { field: "lastName", flex: 1, headerName: "LastName" },
    { field: "phoneNumber", flex: 1, headerName: "PhoneNumber" },
    { field: "roles", flex: 1, headerName: "Roles" },
  ];
  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[1, 2, 5, 10, 20]}
      loading={isLoading}
      getRowId={(row) => row.email}
      compoen
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

export default UsersLayout;
