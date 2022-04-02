import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUser } from "../auth";
import TodoItem from "./todoItem";

const TodoList = ({ taskCreated }) => {
  const [todoData, setTodos] = useState([]);
  const [taskUpdated, setTaskUpaded] = useState();

  const useStyles = makeStyles(() => ({
    noTasks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      width: "100%"
    },
    image: {
        width: "100px",
        transform: "rotate(10deg)",
        opacity: 0.5
    },
    container: {
        height: "100%"
    }
  }));


  const classes = useStyles();

  useEffect(() => {
    const user = getUser();
    axios
      .get("api/v1/todo", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => {});
  }, [taskCreated, taskUpdated]);

  return (
    <Grid container spacing={2} className={classes.container}>
      {todoData.length > 0 ? (
        todoData.map((data) => {
          return (
            <Grid item md={3} xs={100}>
              <TodoItem
                data={data}
                taskUpdated={(response) => setTaskUpaded(response)}
              />
            </Grid>
          );
        })
      ) : (
        <div className={classes.noTasks}>
            <h3>No Task added yet!</h3>
            <img className={classes.image} src="/assets/arrow.png" alt="Notask" />
        </div>
      )}
    </Grid>
  );
};

export default TodoList;
