import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { getUser } from "../auth";
import {
  Fab,
  InputLabel,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";

const TodoItem = ({ data, taskUpdated }) => {
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
      padding: "10px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "20px",
    },
    updateButton: {
        width: "50%",
        margin: "auto"
    },
  }));
  const classes = useStyles();

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [completionDate, setCompletionDate] = useState(data.completionDate);
  const [priority, setPriority] = useState(data.priority);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fabStyle = {
    textAlign: "right",
  };

  const togglePriority = (event, newAlignment) => {
    setPriority(newAlignment);
  };

  const editTask = () => {
    setEditMode(!editMode);
  };

  const updateTask = () => {
    const user = getUser();
    const updatedData = {
      title,
      description,
      completionDate,
      priority,
    };
    axios
      .put(`https://prabhjyot-todo.herokuapp.com/api/v1/todo/${data._id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        taskUpdated(response);
        setButtonDisabled(false);
        setEditMode(false);
      })
      .catch((error) => {
        setButtonDisabled(false);
      });
  };

  const editTaskUI = () => {
    return (
      <>
        <InputLabel className={classes.label}>Task Name</InputLabel>
        <TextField
          type="text"
          variant="outlined"
          placeholder="Enter Task Name"
          value={title}
          required
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputLabel className={classes.label}>Task Description</InputLabel>
        <TextField
          variant="outlined"
          type="text"
          multiline
          placeholder="Enter Description"
          value={description}
          required
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputLabel className={classes.label}>Completion Date</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack className={classes.formInput} spacing={3}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={completionDate}
              onChange={(date) => setCompletionDate(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <InputLabel className={classes.label}>Priority</InputLabel>
        <ToggleButtonGroup
          value={priority}
          exclusive
          onChange={togglePriority}
          aria-label="text alignment"
        >
          <ToggleButton value="high" aria-label="high">
            <span>High</span>
          </ToggleButton>
          <ToggleButton value="low" aria-label="low">
            <span>Low</span>
          </ToggleButton>
        </ToggleButtonGroup>
        <Box display="flex" justifyContent="flex-end">
        <Button className={classes.updateButton} variant="contained" disabled={buttonDisabled} color="primary" onClick={updateTask}>
          Update
        </Button>
        </Box>
      </>
    );
  };

  const deleteTask = () => {
    const user = getUser();
    axios
      .delete(`http://localhost:4000/api/v1/todo/${data._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log(response, "Response");
        taskUpdated(response);
        setButtonDisabled(false);
      })
      .catch((error) => {
        setButtonDisabled(false);
        taskUpdated(error.response);
      });
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <CardContent className={classes.content}>
          <div className={classes.buttonContainer}>
            <Fab
              sx={fabStyle}
              onClick={editTask}
              color="secondary"
            >
              { !editMode ? <EditIcon /> : <CloseIcon />}
            </Fab>
            <Fab
              sx={fabStyle}
              onClick={deleteTask}
              color="warning"
            >
              <DeleteIcon />
            </Fab>
          </div>
          {editMode ? (
            editTaskUI()
          ) : (
            <>
              <h2>Title: {data.title}</h2>
              <p>Description: {data.description}</p>
              <p>
                Completion Date:{" "}
                {new Date(data.completionDate).toLocaleDateString()}
              </p>
              <span className={classes.priority}>
                Priority: {data.priority}
              </span>
            </>
          )}
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
