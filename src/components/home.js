import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { Fab, Slide } from "@mui/material";
import CreateTodo from "./createTodo";
import TodoList from "./todoList";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    todoList: {
      margin: "20px",
    },
  }));
  const classes = useStyles();

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  const [open, setOpen] = useState(false);
  const [taskCreated, setTaskCreated] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.todoList}>
        <TodoList taskCreated={taskCreated} />
      </div>
      <Fab
        sx={fabStyle}
        aria-label="Add"
        color="secondary"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <CreateTodo
        taskCreated={(value) => setTaskCreated(value)}
        open={open}
        closeDialog={handleClose}
      />
    </div>
  );
};

export default Home;
