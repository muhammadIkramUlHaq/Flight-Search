import {
  Box,
  Paper,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface FilterSidebarProps {
  selectedStops: string;
  onChange: (value: string) => void;
  stopCounts: Record<string, number>;
}

const FilterSidebar = ({
  selectedStops,
  onChange,
  stopCounts,
}: FilterSidebarProps) => {
  return (
    <Paper elevation={1} sx={{ p: 3, minWidth: 260 }}>
      <Typography variant="h6">Filters</Typography>
      <Box mt={2}>
        <Typography fontWeight="bold">Number of Stops</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedStops}
            onChange={(e) => onChange(e.target.value)}
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
      </Box>
    </Paper>
  );
};

export default FilterSidebar;
