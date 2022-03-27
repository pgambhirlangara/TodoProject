import { Card, CardContent, CardHeader, Fab, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ data }) => {
  const useStyles = makeStyles((theme) => ({
    priority: {
      borderRadius: "10px",
      border: data.priority === "high" ? "2px solid red" : "2px solid #d2d23a",
      padding: "4px 10px",
      width: "fit-content",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      justifyContent: "center",
      padding: "10px"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "20px",
    },
  }));
  const classes = useStyles();


  const fabStyle = {
    textAlign: "right"
  };

  const editTask = () => {
      console.log("edit");
  }

  const deleteTask = () => {
    console.log("edit");
}

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <CardContent className={classes.content}>
          <div className={classes.buttonContainer}>
            <Fab
              sx={fabStyle}
              aria-label="Add"
              color="secondary"
              onClick={editTask}
            >
              <EditIcon />
            </Fab>
            <Fab
              sx={fabStyle}
              aria-label="Add"
              color="warning"
              onClick={deleteTask}
            >
              <DeleteIcon />
            </Fab>
          </div>
          <h2>Title: {data.title}</h2>
          <p>Description: {data.description}</p>
          <p>Completion Date: {new Date(data.completionDate).toLocaleDateString()}</p>
          <span className={classes.priority}>Priority: {data.priority}</span>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
