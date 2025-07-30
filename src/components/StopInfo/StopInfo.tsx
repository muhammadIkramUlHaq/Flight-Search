import { Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeOffIcon from "@mui/icons-material/FlightTakeoff";
import { TimelineBar, Line, StopDot } from "../FlightCard/FlightCard.styles";
import { formatDuration } from "@/utils/utils";

interface StopInfoProps {
  stops: number;
  duration: number;
}

const StopInfo = ({ stops, duration }: StopInfoProps) => (
  <>
    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
      <AccessTimeIcon fontSize="small" />
      <Typography fontWeight={500}>{formatDuration(duration)}</Typography>
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
      {stops === 0 ? "Direct" : `${stops} stop${stops > 1 ? "s" : ""}`}
    </Typography>
  </>
);

export default StopInfo;
