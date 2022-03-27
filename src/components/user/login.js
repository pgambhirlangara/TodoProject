import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useLocalStorage("user", "");
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
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        padding: "40px",
        width: 400
    },
    cardAction: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px"
    },
    title: {
        textAlign: "center"
    },
    label: {
        fontWeight: "bold !important"
    }
}));

  const classes = useStyles();

  const loginUser = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    const data = {
      email,
      password
    }
    axios.post('/user/login', data ).then((response) => {
      setUser(response.data);
      navigate('../home');
      setButtonDisabled(false);
    })
  }

  return (
    <div className={classes.mainContainer}>
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
          <Button disabled={buttonDisabled}  variant="contained" color="primary" size="small" type="submit" fullWidth>Login</Button>
          <Link to="/signup" >Don't have an account ?</Link>
        </CardActions>
      </Card>
      </form>
    </div>
  );
};

export default Login;
