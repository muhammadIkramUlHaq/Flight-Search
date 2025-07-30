import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { SidebarWrapper, Section, SectionTitle } from "./FilterSidebar.styles";
import type { StopFilter } from "@/types";

interface FilterSidebarProps {
  selectedStops: StopFilter;
  onChange: (value: StopFilter) => void;
  stopCounts: Record<string, number>;
}

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
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label={`All flights (${stopCounts.all})`}
            />
            <FormControlLabel
              value="direct"
              control={<Radio />}
              label={`Direct flights (${stopCounts.direct})`}
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={`1 stop (${stopCounts["1"]})`}
            />
            <FormControlLabel
              value="2+"
              control={<Radio />}
              label={`2+ stops (${stopCounts["2+"]})`}
            />
          </RadioGroup>
        </FormControl>
      </Section>
    </SidebarWrapper>
  );
};

export default FilterSidebar;
