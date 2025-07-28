import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const FlightListWrapper = styled(Box)({
  flex: 1,
});

export const NoResultBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
}));
