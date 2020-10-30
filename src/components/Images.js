import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SingleImage from "./SingleImage.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    opacity: 1,
    height: 200,
    width: 200,
  },
  loading: {
    opacity: 0.2,
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  dialog: {
    position: "relative",
    left: "0%",
    top: "15%",
  },
  modal: {
    height: 500,
    width: 500,
  },
}));

const Images = ({ shiba, loading, handleClick, open }) => {
  const classes = useStyles();
  console.log(open);
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {shiba.map((image, i) => (
            <Grid key={i} item>
              <Paper>
                <SingleImage
                  className={loading ? classes.loading : classes.paper}
                  src={image}
                  key={i}
                  alt="shibe"
                  handleClick={handleClick}
                  open={open}
                />
                {open && (
                  <dialog
                    className={classes.dialog}
                    style={{ position: "absolute" }}
                    open
                    onClick={handleClick}
                  >
                    <img
                      className={classes.modal}
                      src={image}
                      onClick={handleClick}
                      alt="modal"
                    />
                  </dialog>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Images;
