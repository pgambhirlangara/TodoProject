import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const useStyles = makeStyles((theme) => ({
    cardContent: {
        padding: "40px 60px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
    },
    mainContainer: {
        backgroundColor: "#e2e6f1 !important",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        padding: "40px 60px"
    },
    cardAction: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px"
    },
    title: {
        textAlign: "center"
    }
}));

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Card variant="outlined" className={classes.card}>
        <h1 className={classes.title}>Todo App</h1>
        <CardContent className={classes.cardContent}>
          <InputLabel>Name</InputLabel>
          <TextField
            variant="outlined"
            placeholder="Enter Name"
            value={name}
            required
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel>Email</InputLabel>
          <TextField
            type="email"
            variant="outlined"
            placeholder="Enter Email"
            value={email}
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel>Password</InputLabel>
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
          <Button variant="contained" size="small" fullWidth>Signup</Button>
          <Link to="/login">Already have an account ?</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signup;
