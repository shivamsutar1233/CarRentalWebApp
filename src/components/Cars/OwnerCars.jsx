import React, { useState } from "react";
import { useGetApplicationCarsQuery } from "../../redux/api/CarApi";
import CarsLayout from "./CarsLayout";
import CreateEditCarModal from "./CreateEditCarModal";

const OwnerCars = () => {
  const { isLoading, data } = useGetApplicationCarsQuery();
  const [openCreateEditCar, setOpenCreateEditCar] = useState(false);
  const handleOnClose = () => console.log("CreateEdit car modal closed");
  return (
    <React.Fragment>
      <CarsLayout
        data={data}
        isLoading={isLoading}
        open={openCreateEditCar}
        handleClose={handleOnClose}
        setOpen={setOpenCreateEditCar}
        title={"Add car"}
      />
    </React.Fragment>
  );
};

export default OwnerCars;
