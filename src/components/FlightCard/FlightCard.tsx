import { memo } from "react";
import { useMemo, useState } from "react";
import { Typography, Chip, Divider, Box } from "@mui/material";
import FlightSummaryDialog from "@/components/FlightSummaryDialog";
import StopInfo from "@/components/StopInfo";
import { FlexRow, PrimaryButton } from "@/styles/global";
import { formatTime } from "@/utils";
import {
  StyledCard,
  AirlineStack,
  TimeBox,
  TimelineWrapper,
  PriceBox,
  PriceText,
} from "./FlightCard.styles";

interface FlightCardProps {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  duration: number;
  stops: number;
  price: number;
}

const FlightCard = ({
  airline,
  flightNumber,
  departureTime,
  arrivalTime,
  origin,
  destination,
  duration,
  stops,
  price,
}: FlightCardProps) => {
  const [open, setOpen] = useState(false);

  const formattedDeparture = useMemo(
    () => formatTime(departureTime),
    [departureTime]
  );
  const formattedArrival = useMemo(
    () => formatTime(arrivalTime),
    [arrivalTime]
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledCard>
        <FlexRow>
          <Box flex={1}>
            <AirlineStack>
              <Typography variant="h6" fontWeight="bold">
                {airline}
              </Typography>
              <Chip label={flightNumber} size="small" />
            </AirlineStack>

            <FlexRow>
              <TimeBox>
                <Typography fontSize="1.4rem" fontWeight={700}>
                  {formattedDeparture}
                </Typography>
                <Typography color="text.secondary">{origin}</Typography>
              </TimeBox>

              <TimelineWrapper>
                <StopInfo stops={stops} duration={duration} />
              </TimelineWrapper>

              <TimeBox>
                <Typography fontSize="1.4rem" fontWeight={700}>
                  {formattedArrival}
                </Typography>
                <Typography color="text.secondary">{destination}</Typography>
              </TimeBox>
            </FlexRow>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
          <PriceBox>
            <PriceText>${price}</PriceText>
            <Typography variant="body2" color="text.secondary" mb={1}>
              per person
            </Typography>
            <PrimaryButton
              variant="contained"
              size="small"
              onClick={handleOpen}
              aria-label={`Select flight ${flightNumber} with ${airline}`}
            >
              Select Flight
            </PrimaryButton>
          </PriceBox>
        </FlexRow>
      </StyledCard>

      <FlightSummaryDialog
        open={open}
        onClose={handleClose}
        airline={airline}
        flightNumber={flightNumber}
        departure={formattedDeparture}
        arrival={formattedArrival}
        origin={origin}
        destination={destination}
        price={price}
      />
    </>
  );
};

export default memo(FlightCard);
