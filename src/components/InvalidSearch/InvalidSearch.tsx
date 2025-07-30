import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/styles/global";
import { Illustration, Wrapper } from "./InvalidSearch.styles";

const InvalidSearch = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Illustration
        src="./invalid-search.png"
        alt="Invalid search illustration"
      />
      <Typography variant="h5" gutterBottom>
        Invalid search parameters
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Please go back and enter valid 3-letter airport codes.
      </Typography>
      <PrimaryButton variant="contained" onClick={() => navigate("/")}>
        Go to Search
      </PrimaryButton>
    </Wrapper>
  );
};

export default InvalidSearch;
