import { TextField, Autocomplete } from "@mui/material";
import citiesData from "./cities";

// For performance problems, take 1000 pieces of data first, remember to fix it here
const cities = citiesData
  .map((city) => `${city.name} (${city.lat}, ${city.lng})`)
  .slice(0, 1000);

const CitySelect = () => {
  return (
    <Autocomplete
      className="CitySelect"
      size={"small"}
      sx={{ width: { md: 300 } }}
      options={cities}
      autoHighlight
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CitySelect;
