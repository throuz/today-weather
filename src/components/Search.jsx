import { useSelector, useDispatch } from "react-redux";
import { changeCity, selectCity } from "../app/citySlice";
import { changeCountry } from "../app/countrySlice";
import {
  changeCityInputState,
  changeCountryInputState,
} from "../app/inputStateSlice";
import { getWeatherAsync } from "../app/weatherSlice";
import { Button, Stack } from "@mui/material";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";

const Search = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  return (
    <Stack
      className="Search"
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={2}
    >
      <CountrySelect />
      <CitySelect />
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(getWeatherAsync({ lat: city.lat, lon: city.lng }));
          }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(changeCity(null));
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
