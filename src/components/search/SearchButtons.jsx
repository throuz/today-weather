import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCity, selectCity } from "../../app/citySlice";
import { changeCountry } from "../../app/countrySlice";
import {
  changeCityInputState,
  changeCountryInputState,
} from "../../app/inputStateSlice";
import { getWeatherAsync } from "../../app/weatherSlice";
import { Button, Stack, Snackbar, Alert } from "@mui/material";

const SearchButtons = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack className="SearchButtons" direction="row" justifyContent="center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          City cannot be empty!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        onClick={() => {
          if (city) {
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
