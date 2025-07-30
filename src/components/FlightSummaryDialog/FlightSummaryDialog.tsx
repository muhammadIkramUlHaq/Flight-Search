import { PrimaryButton } from "@/styles/global";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface FlightSummaryDialogProps {
  open: boolean;
  onClose: () => void;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  origin: string;
  destination: string;
  price: number;
}

const FlightSummaryDialog = ({
  open,
  onClose,
  airline,
  flightNumber,
  departure,
  arrival,
  origin,
  destination,
  price,
}: FlightSummaryDialogProps) => (
  <Dialog open={open} onClose={onClose}>
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
          {departure} ({origin})
        </strong>
      </Typography>
      <Typography mb={1}>
        Arrival:{" "}
        <strong>
          {arrival} ({destination})
        </strong>
      </Typography>
      <Typography mb={2}>
        Total Price: <strong>${price}</strong>
      </Typography>
      <Typography>Thank you for selecting this flight! ✈️</Typography>
    </DialogContent>
    <DialogActions>
      <PrimaryButton onClick={onClose} autoFocus variant="contained">
        Close
      </PrimaryButton>
    </DialogActions>
  </Dialog>
);

export default FlightSummaryDialog;
