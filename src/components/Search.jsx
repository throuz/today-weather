import { Button, Stack } from "@mui/material";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";

const Search = () => {
  return (
    <Stack
      className="Search"
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={2}
    >
      <CountrySelect />
      <CitySelect />
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="contained">Search</Button>
        <Button variant="contained" color="error">
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

export default Search;
