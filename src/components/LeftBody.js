import { AddShoppingCart, Drafts, Home, Inbox } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LeftBody = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon>
                <AddShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Shopping" />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default LeftBody;
