import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
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
  }));

  const classes = useStyles();

  const signupUser = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    const data = {
      name,
      email,
      password
    }
    axios.post(`https://prabhjyot-todo.herokuapp.com/api/v1/user/register`, data ).then((response) => {
      setButtonDisabled(false);
      navigate('../login');
    }).catch((error) => {
      setButtonDisabled(false);
    })
  };

  return (
    <div className={classes.mainContainer}>
      <form onSubmit={signupUser}>
        <Card variant="outlined" className={classes.card}>
          <h1 className={classes.title}>Todo App</h1>
          <CardContent className={classes.cardContent}>
            <InputLabel className={classes.label}>Name</InputLabel>
            <TextField
              variant="outlined"
              placeholder="Enter Name"
              value={name}
              required
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
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
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              type="submit"
              disabled={buttonDisabled}
            >
              Signup
            </Button>
            <Link to="/login">Already have an account ?</Link>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default Signup;
