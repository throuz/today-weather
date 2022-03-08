import { useSelector, useDispatch } from "react-redux";
import {
  addSearchHistory,
  removeSearchHistory,
  selectSearchHistory,
} from "../../app/searchHistorySlice";
import { getWeatherAsync } from "../../app/weatherSlice";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import date from "date-and-time";

const SearchHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(selectSearchHistory);
  console.log(history);

  const current = date.format(new Date(), "hh:mm:ss A");

  return (
    <List className="SearchHistory" disablePadding>
      {history.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          secondaryAction={
            <Box>
              <IconButton
                aria-label="search"
                onClick={() => {
                  dispatch(addSearchHistory({ ...item, time: current }));
                  dispatch(getWeatherAsync({ lat: item.lat, lon: item.lng }));
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  dispatch(removeSearchHistory(index));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          }
          sx={{ fontWeight: "bold" }}
        >
          <ListItemButton>
            <ListItemText
              primary={item.name + ", " + item.country}
              secondary={item.time}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchHistory;
