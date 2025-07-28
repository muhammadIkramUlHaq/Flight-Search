import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Typography } from "@mui/material";
import { getAirportLabel } from "@/utils/utils";
import { SelectButton } from "@/components/FlightCard/FlightCard.styles";
import {
  BackButton,
  FlexRow,
  LeftGroup,
  LocationGroup,
  StyledTopBar,
} from "./TopBar.styles";

interface TopBarProps {
  origin: string;
  destination: string;
  onToggle: () => void;
}

const TopBar = ({ origin, destination, onToggle }: TopBarProps) => {
  const navigate = useNavigate();

  return (
    <StyledTopBar elevation={1} square>
      <FlexRow>
        <LeftGroup>
          <BackButton
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
          >
            Back to Search
          </BackButton>
          <LocationGroup>
            <FmdGoodOutlinedIcon fontSize="small" color="action" />
            <Typography fontWeight={500}>
              {getAirportLabel(origin)} → {getAirportLabel(destination)}
            </Typography>
          </LocationGroup>
        </LeftGroup>

        <SelectButton
          variant="contained"
          color="success"
          startIcon={<FilterAltOutlinedIcon />}
          onClick={onToggle}
        >
          Filters
        </SelectButton>
      </FlexRow>
    </StyledTopBar>
  );
};

export default TopBar;
