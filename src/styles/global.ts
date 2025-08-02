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

export const Wrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
}));

export const Illustration = styled("img")({
  width: 200,
  height: "auto",
  marginBottom: 24,
});
