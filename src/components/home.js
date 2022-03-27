import React, {  useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { Fab, Slide } from "@mui/material";
import CreateTodo from "./createTodo";

const Home = () => {
  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles();

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };


  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        sx={fabStyle}
        aria-label="Add"
        color="secondary"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <CreateTodo open={open} closeDialog={handleClose} />

    </div>
  );
};

export default Home;
