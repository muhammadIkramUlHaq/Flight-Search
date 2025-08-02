import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { PrimaryButton } from "@/styles/global";
import { airports } from "@/data";
import type { Airport } from "@/types";
import {
  Wrapper,
  HeroSection,
  FormContainer,
  SwapButtonWrapper,
  ButtonWrapper,
} from "./SearchForm.styles";

const SearchForm = () => {
  const [from, setFrom] = useState<Airport | null>(null);
  const [to, setTo] = useState<Airport | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (from && to) {
      navigate(`/results?origin=${from.code}&destination=${to.code}`);
    }
  };

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const getLabel = useCallback(
    (option: Airport) => `${option.city} (${option.code}) - ${option.name}`,
    []
  );

  const filteredFromOptions = useMemo(
    () => airports.filter((a) => a.code !== to?.code),
    [to]
  );

  const filteredToOptions = useMemo(
    () => airports.filter((a) => a.code !== from?.code),
    [from]
  );

  return (
    <Wrapper>
      <HeroSection>
        <img src="/flight-search-icon.svg" alt="Flight Icon" />
        <Typography variant="h4" fontWeight="bold" mt={1}>
          Find Your Perfect Flight
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Search and compare flights from hundreds of airlines
        </Typography>
      </HeroSection>

      <FormContainer>
        <Box display="flex" flexDirection="column" alignItems="stretch" gap={2}>
          <Autocomplete
            options={filteredFromOptions}
            getOptionLabel={getLabel}
            renderInput={(params) => (
              <TextField {...params} label="From" aria-label="From airport" />
            )}
            value={from}
            onChange={(_, value) => setFrom(value)}
          />

          <SwapButtonWrapper>
            <IconButton
              onClick={swapLocations}
              disabled={!from || !to}
              aria-label="Swap locations"
            >
              <SwapVertIcon />
            </IconButton>
          </SwapButtonWrapper>

          <Autocomplete
            options={filteredToOptions}
            getOptionLabel={getLabel}
            renderInput={(params) => (
              <TextField {...params} label="To" aria-label="To airport" />
            )}
            value={to}
            onChange={(_, value) => setTo(value)}
          />

          <ButtonWrapper mt={2}>
            <Tooltip
              title={!from || !to ? "Please select both airports" : ""}
              arrow
            >
              <span>
                <PrimaryButton
                  variant="contained"
                  size="large"
                  startIcon={<SearchIcon />}
                  onClick={handleSearch}
                  disabled={!from || !to}
                >
                  Search Flights
                </PrimaryButton>
              </span>
            </Tooltip>
          </ButtonWrapper>
        </Box>
      </FormContainer>
    </Wrapper>
  );
};

export default SearchForm;
