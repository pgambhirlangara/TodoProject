import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUser } from "../auth";
import TodoItem from "./todoItem";

const TodoList = ({ taskCreated }) => {
  const [todoData, setTodos] = useState([]);

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
  }, [taskCreated]);

  return (
    <Grid container spacing={2}>
      {todoData.map((data) => {
        return (
          <Grid item md={3} xs={100} >
            <TodoItem data={data} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TodoList;
