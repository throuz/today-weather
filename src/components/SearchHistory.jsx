import * as React from "react";
import { List, ListItem, ListItemText, Box, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const SearchHistory = () => {
  return (
    <List className="SearchHistory" disablePadding>
      {generate(
        <ListItem
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
          <ListItemText primary="Johor, MY" secondary="03:15:02 PM" />
        </ListItem>
      )}
    </List>
  );
};

export default SearchHistory;