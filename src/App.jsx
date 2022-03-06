import { useState, useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import Search from "./components/Search";
import WeatherInformation from "./components/WeatherInformation";
import SearchHistory from "./components/SearchHistory";
import axios from "./axios";

const App = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("data/2.5/weather", {
  //       params: {
  //         lat: 35,
  //         lon: 139,
  //       },
  //     })
  //     .then((result) => {
  //       setIsLoaded(true);
  //       console.log(result.data.weather[0].main);
  //       setItems(result.data.weather[0].main);
  //     })
  //     .catch((error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //     });
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return <div>{items}</div>;
  // }

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
