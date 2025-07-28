import { useSearchParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { flights } from "@/data/mockFlights";
import TopBar from "@/components/TopBar/TopBar";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import FlightCard from "@/components/FlightCard/FlightCard";
import {
  ContentContainer,
  FlightListWrapper,
  LayoutWrapper,
  NoResultBox,
  PageWrapper,
} from "./ResultsPage.styles";

const ResultsPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [params] = useSearchParams();

  const origin = params.get("origin");
  const destination = params.get("destination");

  // Filter flights based on search params and selected filter
  const filteredFlights = flights.filter((f) => {
    const baseMatch = f.origin === origin && f.destination === destination;
    if (!baseMatch) return false;

    if (selectedFilter === "direct") return f.stops === 0;
    if (selectedFilter === "1") return f.stops === 1;
    if (selectedFilter === "2+") return f.stops >= 2;
    return true;
  });

  // Stop counts for filters
  const stopCounts = {
    all: flights.filter(
      (f) => f.origin === origin && f.destination === destination
    ).length,
    direct: flights.filter(
      (f) =>
        f.stops === 0 && f.origin === origin && f.destination === destination
    ).length,
    "1": flights.filter(
      (f) =>
        f.stops === 1 && f.origin === origin && f.destination === destination
    ).length,
    "2+": flights.filter(
      (f) =>
        f.stops >= 2 && f.origin === origin && f.destination === destination
    ).length,
  };

  return (
    <PageWrapper>
      <TopBar
        origin={origin || "Origin"}
        destination={destination || "Destination"}
        onToggle={() => setFiltersOpen((prev) => !prev)}
      />

      <ContentContainer maxWidth="lg">
        <LayoutWrapper>
          {filtersOpen && (
            <FilterSidebar
              selectedStops={selectedFilter}
              onChange={setSelectedFilter}
              stopCounts={stopCounts}
            />
          )}

          <FlightListWrapper>
            {filteredFlights.length > 0 && (
              <Typography variant="subtitle1" mb={2} color="text.secondary">
                {filteredFlights.length}{" "}
                {filteredFlights.length === 1 ? "flight" : "flights"} found
              </Typography>
            )}

            {filteredFlights.length === 0 ? (
              <NoResultBox>
                <Typography variant="h6" mb={1}>
                  No flight found
                </Typography>
                <Typography color="text.secondary">
                  Try adjusting your filters or changing your search criteria.
                </Typography>
              </NoResultBox>
            ) : (
              <Stack spacing={3}>
                {filteredFlights.map((flight) => (
                  <FlightCard key={flight.id} {...flight} />
                ))}
              </Stack>
            )}
          </FlightListWrapper>
        </LayoutWrapper>
      </ContentContainer>
    </PageWrapper>
  );
};

export default ResultsPage;
