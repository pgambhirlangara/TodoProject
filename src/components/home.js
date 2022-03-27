import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";
import { Fab } from "@mui/material";


const Home = () => {

    const useStyles = makeStyles((theme) => ({
       
    }));

    const fabStyle = {
      position: "absolute",
      bottom: 16,
      right: 16,
    };

    const classes = useStyles();

  return (
    <div>
      <Fab sx={fabStyle} aria-label="Add" color="secondary">
      <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
