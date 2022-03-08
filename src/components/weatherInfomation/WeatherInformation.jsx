import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherAsync,
  selectWeather,
  selectWeatherStatus,
} from "../../app/weatherSlice";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import date from "date-and-time";

const WeatherInformation = () => {
  const weather = useSelector(selectWeather);
  const fetched = useSelector(selectWeatherStatus) === " ";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherAsync({ lat: 25.04776, lon: 121.53185 }));
  }, []);

  const now = new Date();
  const current = date.format(now, "YYYY-MM-DD HH:mm A");

  return (
    <Card className="WeatherInformation" variant="outlined">
      {fetched ? (
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            {weather.name + ", " + weather.sys.country}
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            {weather.weather[0].main}
          </Typography>
          <Grid container columnSpacing={2}>
            <Grid item color="text.secondary">
              <Typography>Description:</Typography>
              <Typography>Temperature:</Typography>
              <Typography>Humidity:</Typography>
              <Typography>Time:</Typography>
            </Grid>
            <Grid item>
              <Typography>{weather.weather[0].description}</Typography>
              <Typography>
                {weather.main.temp_max + " ~ " + weather.main.temp_min}
              </Typography>
              <Typography>{weather.main.humidity + "%"}</Typography>
              <Typography>{current}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <Stack justifyContent="center" alignItems="center" sx={{ height: 220 }}>
          <CircularProgress />
        </Stack>
      )}
    </Card>
  );
};

export default WeatherInformation;
