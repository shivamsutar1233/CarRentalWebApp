import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { LoadingButton } from "@mui/lab";

export const StyledLoadingButton = ({
  variant,
  children,
  size,
  loading,
  onClick,
  type,
}) => {
  return variant === "contained" ? (
    <StyledContainedLoadingButton
      variant={variant}
      size={size}
      loading={loading}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledContainedLoadingButton>
  ) : (
    <StyledOutlinedLoadingButton
      variant={variant}
      size={size}
      loading={loading}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledOutlinedLoadingButton>
  );
};
export const StyledContainedLoadingButton = styled(LoadingButton)({
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

export const StyledOutlinedLoadingButton = styled(LoadingButton)({
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
