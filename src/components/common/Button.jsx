import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const StyledButton = ({ variant, children, size, onClick }) => {
  return variant === "contained" ? (
    <StyledContainedButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledContainedButton>
  ) : (
    <StyledOutlinedButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledOutlinedButton>
  );
};
export const StyledContainedButton = styled(Button)({
  backgroundColor: grey[900],
  color: grey[50],
  border: "1px solid black",
  "&:hover": {
    backgroundColor: grey[50],
    borderColor: grey[900],
    boxShadow: "none",
    color: grey[900],
  },
  "&:active": {
    backgroundColor: grey[50],
    borderColor: grey[900],
    boxShadow: "none",
    color: grey[900],
  },
  "&:focus": {},
});

export const StyledOutlinedButton = styled(Button)({
  backgroundColor: grey[50],
  color: grey[900],
  border: "1px solid black",
  "&:hover": {
    backgroundColor: grey[900],
    borderColor: grey[50],
    border: "1px solid black",
    color: grey[50],
  },
  "&:active": {
    backgroundColor: grey[900],
    borderColor: grey[50],
    border: "1px solid black",
    color: grey[50],
  },
  "&:focus": {},
});
