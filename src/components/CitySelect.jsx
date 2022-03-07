import { useSelector, useDispatch } from "react-redux";
import { changeCity, selectCity, selectCities } from "../app/citySlice";
import { selectCountry } from "../app/countrySlice";
import { TextField, Autocomplete } from "@mui/material";

const CitySelect = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const cities = useSelector(selectCities);
  const country = useSelector(selectCountry);
  console.log(city);
  console.log(country);

  const round = (num) => Math.round(num * 100) / 100;

  return (
    <Autocomplete
      key={!!country}
      className="CitySelect"
      size={"small"}
      sx={{ width: { md: 300 } }}
      disabled={!country}
      options={cities}
      autoHighlight
      getOptionLabel={(option) =>
        `${option.name}  (${round(option.lat)}, ${round(option.lng)})`
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a City"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
      onChange={(event, newValue) => {
        dispatch(changeCity(newValue));
      }}
    />
  );
};

export default CitySelect;
