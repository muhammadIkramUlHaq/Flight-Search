import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import TopBar from "@/components/TopBar/TopBar";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import FlightCard from "@/components/FlightCard/FlightCard";
import { airports, flights } from "@/data/mockFlights";
import type { StopFilter } from "@/types";
import {
  ContentContainer,
  FlightListWrapper,
  LayoutWrapper,
  NoResultBox,
  PageWrapper,
} from "./ResultsPage.styles";
import InvalidSearch from "@/components/InvalidSearch/InvalidSearch";

const ResultsPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<StopFilter>("all");
  const [params] = useSearchParams();

  const origin = params.get("origin")?.toUpperCase() || null;
  const destination = params.get("destination")?.toUpperCase() || null;

  const isKnownAirportCode = (code: string | null): code is string =>
    !!code && /^[A-Z]{3}$/.test(code) && airports.some((a) => a.code === code);

  const matchingFlights = useMemo(() => {
    return flights.filter(
      (f) => f.origin === origin && f.destination === destination
    );
  }, [origin, destination]);

  const stopCounts = useMemo(
    () => ({
      all: matchingFlights.length,
      direct: matchingFlights.filter((f) => f.stops === 0).length,
      "1": matchingFlights.filter((f) => f.stops === 1).length,
      "2+": matchingFlights.filter((f) => f.stops >= 2).length,
    }),
    [matchingFlights]
  );

  const filteredFlights = useMemo(() => {
    switch (selectedFilter) {
      case "direct":
        return matchingFlights.filter((f) => f.stops === 0);
      case "1":
        return matchingFlights.filter((f) => f.stops === 1);
      case "2+":
        return matchingFlights.filter((f) => f.stops >= 2);
      default:
        return matchingFlights;
    }
  }, [matchingFlights, selectedFilter]);

  if (!isKnownAirportCode(origin) || !isKnownAirportCode(destination)) {
    return (
      <PageWrapper>
        <ContentContainer maxWidth="md">
          <InvalidSearch />
        </ContentContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <TopBar
        origin={origin}
        destination={destination}
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
