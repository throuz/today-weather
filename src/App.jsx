import { Stack, Typography, Divider } from "@mui/material";
import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";

const App = () => {
  return (
    <Stack className="App" divider={<Divider />} spacing={2} sx={{ p: 2 }}>
      <Typography variant="h6">Today's Weather</Typography>
      <Search />
      <WeatherInformation />
    </Stack>
  );
};

export default App;
