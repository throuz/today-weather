import { useDispatch } from "react-redux";
import { changeCountry } from "../app/countrySlice";
import {
  changeCityInputState,
  changeCountryInputState,
} from "../app/inputStateSlice";
import { Button, Stack } from "@mui/material";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";

const Search = () => {
  const dispatch = useDispatch();

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
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(changeCountry(null));
            dispatch(changeCityInputState());
            dispatch(changeCountryInputState());
          }}
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

export default Search;
