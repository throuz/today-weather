import { Card, CardContent, Typography, Grid } from "@mui/material";

const WeatherInformation = () => {
  return (
    <Card className="WeatherInformation" variant="outlined">
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Johor, MY
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          Clouds
        </Typography>
        <Grid container columnSpacing={2}>
          <Grid item color="text.secondary">
            <Typography>Description:</Typography>
            <Typography>Temperature:</Typography>
            <Typography>Humidity:</Typography>
            <Typography>Time:</Typography>
          </Grid>
          <Grid item>
            <Typography>scatered clouds</Typography>
            <Typography>303.15°C~306.15°C</Typography>
            <Typography>58%</Typography>
            <Typography>2021-03-16 03:15 PM</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherInformation;
