import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";
import { MemoryRouter } from "react-router-dom";
import { airports } from "../../data";

const renderForm = () =>
  render(
    <MemoryRouter>
      <SearchForm />
    </MemoryRouter>
  );

describe("SearchForm", () => {
  it("renders form fields and search button", () => {
    renderForm();

    expect(screen.getByLabelText(/From airport/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/To airport/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Search Flights/i })
    ).toBeInTheDocument();
  });

  it("disables Search Flights button when airports are not selected", () => {
    renderForm();

    const button = screen.getByRole("button", { name: /Search Flights/i });
    expect(button).toBeDisabled();
  });

  it("enables Search Flights button when both airports are selected", async () => {
    renderForm();

    const user = userEvent.setup();

    const fromInput = screen.getByLabelText("From airport");
    const toInput = screen.getByLabelText("To airport");

    const fromLabel = `${airports[0].city} (${airports[0].code}) - ${airports[0].name}`;
    const toLabel = `${airports[1].city} (${airports[1].code}) - ${airports[1].name}`;

    await user.click(fromInput);
    await user.type(fromInput, airports[0].city);
    await user.click(await screen.findByText(fromLabel));

    await user.click(toInput);
    await user.type(toInput, airports[1].city);
    await user.click(await screen.findByText(toLabel));

    const button = screen.getByRole("button", { name: /search flights/i });
    expect(button).not.toBeDisabled();
  });
});
