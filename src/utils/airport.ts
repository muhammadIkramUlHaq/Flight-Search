import { airports } from "@/data";

export const getAirportLabel = (code: string) => {
  const found = airports.find((a) => a.code === code);
  return found ? `${found.city} (${found.code})` : code;
};
