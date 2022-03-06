import { Stack, Box, Divider } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Stack divider={<Divider />} spacing={2} sx={{ p: 2 }}>
        <Box sx={{ typography: "h6" }}>Today's Weather</Box>
        <Box sx={{ typography: "h6" }}>Today's Weather</Box>
      </Stack>
    </div>
  );
};

export default App;
