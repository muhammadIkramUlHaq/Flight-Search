// flightCard.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Paper, Typography, Button } from "@mui/material";

export const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
}));

export const FlexRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AirlineStack = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  gap: theme.spacing(1),
}));

export const TimeBox = styled(Box)({
  textAlign: "center",
});

export const TimelineWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0, 2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

export const TimelineBar = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 20,
}));

export const Line = styled(Box)(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.grey[300]}`,
  flexGrow: 1,
  margin: theme.spacing(0, 1),
  position: "relative",
  height: 0,
}));

interface StopDotProps {
  left: string;
}

export const StopDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "left",
})<StopDotProps>(({ theme, left }) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: theme.palette.error.main,
  position: "absolute",
  top: -4,
  left,
  transform: "translateX(-50%)",
}));

export const PriceBox = styled(Box)({
  textAlign: "center",
  minWidth: 150,
});

export const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: theme.palette.success.main,
}));

export const SelectButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark || "#00994D",
  },
}));
