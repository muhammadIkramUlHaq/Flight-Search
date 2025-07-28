import { styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";

export const SidebarWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: 260,
}));

export const Section = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(() => ({
  fontWeight: "bold",
}));
