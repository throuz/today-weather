import { Container, Stack, Typography } from "@mui/material";
import Search from "./components/search/Search";
import WeatherInformation from "./components/weatherInfomation/WeatherInformation";
import SearchHistory from "./components/searchHistory/SearchHistory";

const App = () => {
  return (
    <Container className="App" maxWidth="md">
      <Stack spacing={2} sx={{ px: 2, py: 4 }}>
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
