import { Paper, Box, Typography, styled } from "@mui/material";

export const SidebarWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: 260,
  maxHeight: "100vh",
  overflowY: "auto",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));

export const Section = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(() => ({
  fontWeight: "bold",
}));
