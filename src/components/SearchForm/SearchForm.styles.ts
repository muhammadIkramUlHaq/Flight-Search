import { Box, Paper, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
}));

export const FormContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 600,
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: theme.shadows[3],
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  img: {
    width: 100,
    height: 100,
  },
}));

export const SwapButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const ButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
