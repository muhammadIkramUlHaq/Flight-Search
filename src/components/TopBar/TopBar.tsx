import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getAirportLabel } from "@/utils/utils";
import { FlexRow, PrimaryButton } from "@/styles/global";
import {
  BackButton,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledTopBar elevation={1} square>
      <FlexRow
        sx={{ flexWrap: "wrap", rowGap: 1, justifyContent: "space-between" }}
      >
        <LeftGroup>
          <BackButton
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
          >
            {!isMobile && "Back to Search"}
          </BackButton>

          {!isMobile && (
            <LocationGroup>
              <FmdGoodOutlinedIcon fontSize="small" color="action" />
              <Typography fontWeight={500}>
                {getAirportLabel(origin)} → {getAirportLabel(destination)}
              </Typography>
            </LocationGroup>
          )}
        </LeftGroup>

        <PrimaryButton
          variant="contained"
          color="success"
          startIcon={<FilterAltOutlinedIcon />}
          onClick={onToggle}
        >
          {!isMobile && "Filters"}
        </PrimaryButton>
      </FlexRow>
    </StyledTopBar>
  );
};

export default TopBar;
