import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import type { StopFilter } from "@/types";
import { Section, SectionTitle, SidebarWrapper } from "./FilterSidebar.styles";

interface FilterSidebarProps {
  selectedStops: StopFilter;
  onChange: (value: StopFilter) => void;
  stopCounts: Record<StopFilter, number>;
}

const stopOptions: StopFilter[] = ["all", "direct", "1", "2+"];

const FilterSidebar = ({
  selectedStops,
  onChange,
  stopCounts,
}: FilterSidebarProps) => {
  return (
    <SidebarWrapper elevation={1}>
      <Typography variant="h6">Filters</Typography>

      <Section>
        <SectionTitle>Number of Stops</SectionTitle>
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedStops}
            onChange={(e) => onChange(e.target.value as StopFilter)}
            aria-label="Stop Filter"
          >
            {stopOptions.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={`${
                  option === "all"
                    ? "All flights"
                    : option === "direct"
                    ? "Direct flights"
                    : `${option} stop${option === "1" ? "" : "s"}`
                } (${stopCounts[option]})`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Section>
    </SidebarWrapper>
  );
};

export default FilterSidebar;
