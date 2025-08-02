import { render, screen, fireEvent, act } from "@testing-library/react";
import FlightCard from "./FlightCard";
import { formatTime } from "../../utils";
import React from "react";

const flight = {
  id: "f1",
  airline: "Delta",
  flightNumber: "DL101",
  origin: "JFK",
  destination: "LAX",
  departureTime: "2023-06-01T08:00:00Z",
  arrivalTime: "2023-06-01T11:30:00Z",
  price: 299,
  stops: 2,
  duration: 330,
};

describe("FlightCard", () => {
  it("renders basic flight info", () => {
    render(<FlightCard {...flight} />);

    expect(screen.getByText("Delta")).toBeInTheDocument();
    expect(screen.getByText("DL101")).toBeInTheDocument();
    expect(screen.getByText("$299")).toBeInTheDocument();
    expect(screen.getByText("JFK")).toBeInTheDocument();
    expect(screen.getByText("LAX")).toBeInTheDocument();
  });

  it("shows formatted times for departure and arrival", () => {
    render(<FlightCard {...flight} />);

    const formattedDeparture = formatTime(flight.departureTime);
    const formattedArrival = formatTime(flight.arrivalTime);

    expect(screen.getByText(formattedDeparture)).toBeInTheDocument();
    expect(screen.getByText(formattedArrival)).toBeInTheDocument();
  });

  it("opens the flight summary dialog on button click", async () => {
    render(<FlightCard {...flight} />);

    const button = screen.getByRole("button", {
      name: /select flight dl101 with delta/i,
    });

    // Wrap interaction in act to suppress ripple warning
    await act(async () => {
      fireEvent.click(button);
    });

    expect(
      screen.getByRole("dialog", { name: /flight summary/i })
    ).toBeInTheDocument();
  });
});
