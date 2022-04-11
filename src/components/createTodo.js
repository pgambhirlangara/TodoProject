import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  InputLabel,
  Slide,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { forwardRef, useState } from "react";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { getUser } from "../auth";

const CreateTodo = ({ open, closeDialog, taskCreated }) => {
  const useStyles = makeStyles((theme) => ({
    dialogContentText: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    label: {
      fontWeight: "bold !important",
    },
  }));
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [priority, setPriority] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const togglePriority = (event, newAlignment) => {
    setPriority(newAlignment);
  };

  const handleClose = () => {
    closeDialog();
  };

  const saveTodo = () => {
    setButtonDisabled(true);
    const data = {
      title,
      description,
      completionDate,
      priority,
    };

    const user = getUser();
    axios.post(`/api/v1/todo/create`, data, {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }).then((response) => {
      setButtonDisabled(false);
      setTimeout(() => {
        taskCreated(response);
      }, 1000);
      handleClose();
    })
    .catch((error) => {
        setButtonDisabled(false);
        handleClose();
    })
  };

  return (
    <Dialog open={open} keepMounted maxWidth="md" onClose={handleClose}>
      <DialogTitle>Create a Task</DialogTitle>
      <DialogContent style={{ width: "500px"}}>
        <DialogContentText className={classes.dialogContentText}>
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
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={buttonDisabled}
          color="secondary"
          onClick={saveTodo}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTodo;
