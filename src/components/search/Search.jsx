import { Stack } from "@mui/material";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";
import SearchButtons from "./SearchButtons";

const Search = () => {
  return (
    <Stack
      className="Search"
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={2}
    >
      <CountrySelect />
      <CitySelect />
      <SearchButtons />
    </Stack>
  );
};

export default Search;
