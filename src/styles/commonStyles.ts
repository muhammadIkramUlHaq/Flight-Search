import { Box, Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark || "#00994D",
  },
}));

export const FlexRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
