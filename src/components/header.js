import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const user = getUser();
  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isLoggedIn ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hi, {user.name}
              </Typography>{" "}
              <Button variant="contained" onClick={logoutUser}>
                Logout
              </Button>{" "}
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
