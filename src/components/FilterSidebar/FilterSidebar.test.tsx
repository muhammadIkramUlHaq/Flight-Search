import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterSidebar from "./FilterSidebar";

const stopCounts = { all: 5, direct: 2, "1": 2, "2+": 1 };

describe("FilterSidebar", () => {
  it("renders without crashing", () => {
    render(
      <FilterSidebar
        selectedStops="all"
        onChange={jest.fn()}
        stopCounts={stopCounts}
      />
    );

    expect(screen.getByText(/Filters/i)).toBeInTheDocument();
  });

  it("renders all stop filter options with correct labels", () => {
    render(
      <FilterSidebar
        selectedStops="all"
        onChange={jest.fn()}
        stopCounts={stopCounts}
      />
    );

    expect(screen.getByLabelText("All flights (5)")).toBeInTheDocument();
    expect(screen.getByLabelText("Direct flights (2)")).toBeInTheDocument();
    expect(screen.getByLabelText("1 stop (2)")).toBeInTheDocument();
    expect(screen.getByLabelText("2+ stops (1)")).toBeInTheDocument();
  });

  it("selects the correct radio option", () => {
    render(
      <FilterSidebar
        selectedStops="direct"
        onChange={jest.fn()}
        stopCounts={stopCounts}
      />
    );

    const directRadio = screen.getByLabelText(
      "Direct flights (2)"
    ) as HTMLInputElement;
    expect(directRadio.checked).toBe(true);
  });

  it("calls onChange when a different radio is clicked", () => {
    const onChangeMock = jest.fn();
    render(
      <FilterSidebar
        selectedStops="all"
        onChange={onChangeMock}
        stopCounts={stopCounts}
      />
    );

    const directRadio = screen.getByLabelText("Direct flights (2)");
    fireEvent.click(directRadio);

    expect(onChangeMock).toHaveBeenCalledWith("direct");
  });
});
