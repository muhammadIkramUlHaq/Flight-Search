import { Box, Paper, Button, styled } from "@mui/material";

export const StyledTopBar = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: theme.palette.background.paper,
}));

export const LeftGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const LocationGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const BackButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));
