import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Header = ({ isLoggedIn }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo Application
          </Typography>
          {isLoggedIn ? <Button variant="contained">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
