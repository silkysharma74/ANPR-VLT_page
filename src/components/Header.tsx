import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Header = () => {
  return (
    <AppBar sx={{ zIndex: 1201 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">ANPR - VLT</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
