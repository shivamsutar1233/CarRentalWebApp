import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomModal from "../common/CustomModal";

import CreateEditCar from "./CreateEditCar";
const CreateEditCarModal = ({
  open,
  handleClose,
  setOpen,
  carId,
  isEdit,
  title,
}) => {
  return (
    <React.Fragment>
      <CustomModal
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        title={title}
      >
        <CreateEditCar
          open={open}
          setOpen={setOpen}
          isEdit={isEdit}
          carId={carId}
          onClose={() => {}}
        />
      </CustomModal>
    </React.Fragment>
  );
};

export default CreateEditCarModal;
