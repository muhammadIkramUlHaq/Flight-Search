import { styled } from "@mui/material/styles";
import { Box, Paper, Button } from "@mui/material";

export const StyledTopBar = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  position: "sticky",
  top: 0,
  zIndex: 10,
}));

export const FlexRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LeftGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const LocationGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const BackButton = styled(Button)({
  textTransform: "none",
});
