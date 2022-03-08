import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCity, selectCity } from "../../app/citySlice";
import { changeCountry } from "../../app/countrySlice";
import {
  changeCityInputState,
  changeCountryInputState,
} from "../../app/inputStateSlice";
import { addSearchHistory } from "../../app/searchHistorySlice";
import { getWeatherAsync } from "../../app/weatherSlice";
import { Button, Stack, Snackbar, Alert } from "@mui/material";
import date from "date-and-time";

const SearchButtons = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const [open, setOpen] = useState(false);

  const current = date.format(new Date(), "hh:mm:ss A");

  return (
    <Stack className="SearchButtons" direction="row" justifyContent="center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          City cannot be empty!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        onClick={() => {
          if (city) {
            dispatch(addSearchHistory({ time: current, ...city }));
            dispatch(getWeatherAsync({ lat: city.lat, lon: city.lng }));
          } else {
            setOpen(true);
          }
        }}
      >
        Search
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ ml: 2 }}
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
  );
};

export default SearchButtons;
