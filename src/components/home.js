import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { Alert, Fab, LinearProgress, Slide, Snackbar } from "@mui/material";
import CreateTodo from "./createTodo";
import TodoList from "./todoList";
import { getUser } from "../auth";
import axios from "axios";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    todoList: {
      margin: "20px",
    },
  }));
  const classes = useStyles();

  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const [open, setOpen] = useState(false);
  const [taskUpdated, setTaskUpdated] = useState();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const [todoData, setTodos] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setShowLoading(true);
    setMessage(taskUpdated ? taskUpdated.data.message : "");
    setSeverity("success");
    setOpenSnackBar(taskUpdated ? true : false);
    const user = getUser();
    axios
      .get(`https://prabhjyot-todo.herokuapp.com/api/v1/todo`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setTodos(response.data.data);
        setShowLoading(false);
        setOpenSnackBar(false);
      })
      .catch((error) => {
        setShowLoading(false);
        setTodos([]);
        setOpenSnackBar(false);
      });
  }, [taskUpdated]);

  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "center",
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {
        showLoading ? 
        <LinearProgress color="primary" /> : null
      }

      <Snackbar
        anchorOrigin={anchorOrigin}
        open={openSnackBar}
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
      <div className={classes.todoList}>
        <TodoList
          todoData={todoData}
          taskUpdate={(val) => setTaskUpdated(val)}
        />
      </div>
      <Fab
        sx={fabStyle}
        aria-label="Add"
        color="primary"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <CreateTodo
        taskCreated={(value) => setTaskUpdated(value)}
        open={open}
        closeDialog={handleClose}
      />
    </div>
  );
};

export default Home;
