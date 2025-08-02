import { useNavigate } from "react-router-dom";
import NotFoundIllustration from "@/assets/404.svg";
import { Typography } from "@mui/material";
import { Wrapper, Illustration, PrimaryButton } from "@/styles/global";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Illustration src={NotFoundIllustration} alt="404 Not Found" />
      <Typography variant="h5" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Oops! The page you are looking for does not exist or has been moved.
      </Typography>
      <PrimaryButton variant="contained" onClick={() => navigate("/")}>
        Go to Home
      </PrimaryButton>
    </Wrapper>
  );
};

export default NotFoundPage;
