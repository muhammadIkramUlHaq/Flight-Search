export type Flight = {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string; // Airport code (e.g., "JFK")
  destination: string; // Airport code (e.g., "LAX")
  departureTime: string; // ISO string
  arrivalTime: string; // ISO string
  price: number;
  stops: number;
  duration: number; // in minutes
};
