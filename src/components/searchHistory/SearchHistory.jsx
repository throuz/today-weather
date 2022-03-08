import { useSelector, useDispatch } from "react-redux";
import {
  addSearchHistory,
  removeSearchHistory,
  selectSearchHistory,
} from "../../app/searchHistorySlice";
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

const SearchHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(selectSearchHistory);

  return (
    <List className="SearchHistory" disablePadding>
      {history.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          secondaryAction={
            <Box>
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="delete">
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
