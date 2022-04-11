import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {
  Alert,
  CircularProgress,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../auth";
import GoogleLogin from "react-google-login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const useStyles = makeStyles((theme) => ({
    cardContent: {
      padding: "40px 60px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "10px",
    },
    mainContainer: {
      backgroundColor: theme.palette.secondary.main,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      padding: "40px",
      width: 400,
    },
    cardAction: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px",
    },
    title: {
      textAlign: "center",
    },
    label: {
      fontWeight: "bold !important",
    },
    button: {
      width: "200px",
    },
  }));

  const classes = useStyles();

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const loginUser = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    const data = {
      email,
      password,
    };
    axios
      .post(`/api/v1/user/login`, data)
      .then((response) => {
        login(response.data);
        setMessage(response.data.message);
        setSeverity("success");
        setOpen(true);
        setButtonDisabled(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        setSeverity("error");
        setOpen(true);
        setButtonDisabled(false);
        setMessage(error.response.data.message);
      });
  };

  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "center",
  };


  return (
    <div className={classes.mainContainer}>
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          className={classes.snackbar}
          onClose={handleAlertClose}
          severity={severity}
        >
          {message}
        </Alert>
      </Snackbar>
      <form onSubmit={loginUser}>
        <Card variant="outlined" className={classes.card}>
          <h1 className={classes.title}>Todo App</h1>
          <CardContent className={classes.cardContent}>
            <InputLabel className={classes.label}>Email</InputLabel>
            <TextField
              type="email"
              variant="outlined"
              placeholder="Enter Email"
              value={email}
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel className={classes.label}>Password</InputLabel>
            <TextField
              variant="outlined"
              type="password"
              placeholder="Enter Password"
              value={password}
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Button
              disabled={buttonDisabled}
              variant="contained"
              size="small"
              type="submit"
              color="warning"
              className={classes.button}
            >
              {buttonDisabled ? (
                <CircularProgress
                  size="1.5rem"
                  style={{ marginRight: "8px" }}
                  color="primary"
                />
              ) : null}{" "}
              Login
            </Button>

  
            <Link to="/signup">Don't have an account ?</Link>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default Login;
