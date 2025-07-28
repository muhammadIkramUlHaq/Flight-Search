import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <CircularProgress color="primary" />
      <Typography mt={2} color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
