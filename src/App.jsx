import { Stack, Box, Divider } from "@mui/material";
import Search from "./components/Search";

const App = () => {
  return (
    <Stack className="App" divider={<Divider />} spacing={2} sx={{ p: 2 }}>
      <Box sx={{ typography: "h6" }}>Today's Weather</Box>
      <Search />
    </Stack>
  );
};

export default App;
