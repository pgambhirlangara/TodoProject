import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth";


const Header = ({ isLoggedIn }) => {

    const navigate = useNavigate();
    const logoutUser = () => {
        logout();
    }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo Application
          </Typography>
          {isLoggedIn ? <Button variant="contained" onClick={logoutUser}>Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
