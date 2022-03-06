import { Container, Stack, Typography } from "@mui/material";
import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import SearchHistory from "./components/SearchHistory";

const App = () => {
  return (
    <Container maxWidth="md">
      <Stack className="App" spacing={2} sx={{ px: 2, py: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", borderBottom: 1 }}>
          Today's Weather
        </Typography>
        <Search />
        <WeatherInformation />
        <Typography variant="h5" sx={{ fontWeight: "bold", borderBottom: 1 }}>
          Search History
        </Typography>
        <SearchHistory />
      </Stack>
    </Container>
  );
};

export default App;
