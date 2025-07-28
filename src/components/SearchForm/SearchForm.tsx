import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { airports } from "@/data/mockFlights";
import { PrimaryButton } from "@/styles/global";
import type { Airport } from "@/types";
import { FormContainer, HeroSection, Wrapper } from "./SearchForm.styles";

const SearchForm = () => {
  const [from, setFrom] = useState<Airport | null>(null);
  const [to, setTo] = useState<Airport | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (from && to) {
      navigate(`/results?origin=${from.code}&destination=${to.code}`);
    }
  };

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
        <Box display="flex" flexDirection="column" gap={3}>
          <Autocomplete
            options={airports}
            getOptionLabel={(option) =>
              `${option.city} (${option.code}) - ${option.name}`
            }
            renderInput={(params) => <TextField {...params} label="From" />}
            value={from}
            onChange={(_, value) => setFrom(value)}
          />

          <Autocomplete
            options={airports}
            getOptionLabel={(option) =>
              `${option.city} (${option.code}) - ${option.name}`
            }
            renderInput={(params) => <TextField {...params} label="To" />}
            value={to}
            onChange={(_, value) => setTo(value)}
          />

          <PrimaryButton
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
            disabled={!from || !to}
          >
            Search Flights
          </PrimaryButton>
        </Box>
      </FormContainer>
    </Wrapper>
  );
};

export default SearchForm;
