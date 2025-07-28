import { useState } from "react";
import {
  Typography,
  Chip,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeOffIcon from "@mui/icons-material/FlightTakeoff";
import { FlexRow, PrimaryButton } from "@/styles/global";
import {
  StyledCard,
  AirlineStack,
  TimeBox,
  TimelineWrapper,
  TimelineBar,
  Line,
  StopDot,
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

const formatTime = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const formatDuration = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledCard>
        <FlexRow>
          {/* Left - Flight Info */}
          <Box flex={1}>
            <AirlineStack>
              <Typography variant="h6" fontWeight="bold">
                {airline}
              </Typography>
              <Chip label={flightNumber} size="small" />
            </AirlineStack>

            <FlexRow>
              {/* Departure */}
              <TimeBox>
                <Typography fontSize="1.4rem" fontWeight={700}>
                  {formatTime(departureTime)}
                </Typography>
                <Typography color="text.secondary">{origin}</Typography>
              </TimeBox>

              {/* Timeline */}
              <TimelineWrapper>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography fontWeight={500}>
                    {formatDuration(duration)}
                  </Typography>
                </Stack>

                <TimelineBar>
                  <FlightTakeOffIcon fontSize="small" sx={{ color: "#666" }} />
                  <Line>
                    {Array.from({ length: stops }).map((_, index) => (
                      <StopDot
                        key={index}
                        left={`calc(50% + ${(index - (stops - 1) / 2) * 15}px)`}
                      />
                    ))}
                  </Line>
                  <FlightLandIcon fontSize="small" sx={{ color: "#666" }} />
                </TimelineBar>

                <Typography
                  variant="body2"
                  color={stops > 0 ? "error.main" : "text.secondary"}
                  mt={1}
                >
                  {stops === 0
                    ? "Direct"
                    : `${stops} stop${stops > 1 ? "s" : ""}`}
                </Typography>
              </TimelineWrapper>

              {/* Arrival */}
              <TimeBox>
                <Typography fontSize="1.4rem" fontWeight={700}>
                  {formatTime(arrivalTime)}
                </Typography>
                <Typography color="text.secondary">{destination}</Typography>
              </TimeBox>
            </FlexRow>
          </Box>

          {/* Right - Price */}
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
            >
              Select Flight
            </PrimaryButton>
          </PriceBox>
        </FlexRow>
      </StyledCard>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Flight Summary</DialogTitle>
        <DialogContent>
          <Typography mb={1}>
            You selected{" "}
            <strong>
              {airline} {flightNumber}
            </strong>
          </Typography>
          <Typography mb={1}>
            Departure:{" "}
            <strong>
              {formatTime(departureTime)} ({origin})
            </strong>
          </Typography>
          <Typography mb={1}>
            Arrival:{" "}
            <strong>
              {formatTime(arrivalTime)} ({destination})
            </strong>
          </Typography>
          <Typography mb={2}>
            Total Price: <strong>${price}</strong>
          </Typography>
          <Typography>Thank you for selecting this flight! ✈️</Typography>
        </DialogContent>
        <DialogActions>
          <PrimaryButton onClick={handleClose} autoFocus variant="contained">
            Close
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FlightCard;
