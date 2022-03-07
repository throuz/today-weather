import { useDispatch } from "react-redux";
import { changeCountry } from "../app/countrySlice";
import { Box, TextField, Autocomplete } from "@mui/material";
import countries from "../datas/countries";

const CountrySelect = () => {
  const dispatch = useDispatch();

  return (
    <Autocomplete
      className="CountrySelect"
      size={"small"}
      sx={{ width: { md: 300 } }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a Country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
      onChange={(event, newValue) => {
        dispatch(changeCountry(newValue));
      }}
    />
  );
};

export default CountrySelect;
