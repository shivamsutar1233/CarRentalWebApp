import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
const CustomModal = ({ open, setOpen, handleClose, title, children }) => {
  const handleModalClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="px-24 py-4"
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          height: "100%",
          // border: "1px solid",
          position: "relative",
        }}
      >
        <StyledHeader className="p-2 h-[8%] flex items-center justify-between">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>{" "}
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <Divider />
        <StyledBody className="p-2  overflow-y-auto">{children}</StyledBody>

        {/* <StyledFooter className="flex flex-col justify-start h-[12%] absolute bottom-0 w-full">
          <Divider />
          <section className="flex justify-end gap-4 p-3 h-full  w-full">
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={handleModalClose}
            >
              Close
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Save
            </Button>
          </section>
        </StyledFooter> */}
      </Box>
    </Modal>
  );
};

export default CustomModal;

// const StyledModal = styled(Modal);

const StyledHeader = styled.section``;

const StyledBody = styled.section``;

const StyledFooter = styled.section``;
