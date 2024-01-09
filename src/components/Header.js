import {
  AppBar,
  Avatar,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { AcUnit, Notifications } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky">
      <StyledRoolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icons>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ bgcolor: "gray" }} onClick={handleClick}>
            N
          </Avatar>
        </Icons>
      </StyledRoolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

const StyledRoolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(`div`)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(`div`)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default Header;
