import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ResultsPage from "./ResultsPage";

jest.mock("../../data", () => ({
  flights: [
    {
      id: "f1",
      airline: "Delta",
      flightNumber: "DL101",
      origin: "JFK",
      destination: "LAX",
      departureTime: "10:00",
      arrivalTime: "13:30",
      stops: 2,
      duration: "5h 30m",
      price: 299,
    },
    {
      id: "f2",
      airline: "American Airlines",
      flightNumber: "AA208",
      origin: "JFK",
      destination: "LAX",
      departureTime: "12:00",
      arrivalTime: "18:00",
      stops: 1,
      duration: "6h 0m",
      price: 275,
    },
  ],
  airports: [
    {
      code: "JFK",
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "USA",
    },
    {
      code: "LAX",
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "USA",
    },
    {
      code: "CDG",
      name: "Charles de Gaulle Airport",
      city: "Paris",
      country: "France",
    },
  ],
}));

jest.mock("@/components/FlightCard/FlightCard", () => ({
  __esModule: true,
  default: ({ airline }: { airline: string }) => (
    <div>{`Mocked FlightCard for ${airline}`}</div>
  ),
}));

const renderWithRouter = (query = "origin=JFK&destination=LAX") => {
  return render(
    <MemoryRouter initialEntries={[`/results?${query}`]}>
      <Routes>
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("ResultsPage", () => {
  it("renders matching flights with valid query", async () => {
    renderWithRouter();

    expect(await screen.findByText(/2 flights found/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked FlightCard for Delta/)).toBeInTheDocument();
    expect(
      screen.getByText(/Mocked FlightCard for American Airlines/)
    ).toBeInTheDocument();
  });

  it("filters flights when selecting 1 stop", async () => {
    renderWithRouter();

    const oneStopRadio = await screen.findByLabelText(/1 stop/i);
    fireEvent.click(oneStopRadio);

    await waitFor(() => {
      expect(
        screen.getByText(/Mocked FlightCard for American Airlines/)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(/Mocked FlightCard for Delta/)
      ).not.toBeInTheDocument();
    });
  });

  it("shows error on invalid query", async () => {
    renderWithRouter("origin=abc&destination=xyz");

    expect(
      await screen.findByRole("heading", { name: /invalid search parameters/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please go back and enter valid 3-letter airport codes/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /go to search/i })
    ).toBeInTheDocument();
  });

  it("shows 'No flight found' for valid query with no matching flights", async () => {
    renderWithRouter("origin=JFK&destination=CDG");

    expect(await screen.findByText(/no flight found/i)).toBeInTheDocument();

    expect(
      screen.getByText(
        /try adjusting your filters or changing your search criteria/i
      )
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /invalid search parameters/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/mocked flightcard/i)).not.toBeInTheDocument();
  });
});
