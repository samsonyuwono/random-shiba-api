import React from "react";
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
    position: "fixed",
    left: "0%",
    top: "15%",
  },
  modal: {
    height: 500,
    width: 500,
  },

  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    "background-color": "rgba(0,0,0,0.1)",
    opacity: "0.2",
    cursor: "pointer",
  },
}));

const Images = ({ shiba, loading, clickModal, open, currentModal }) => {
  const classes = useStyles();
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
                  clickModal={() => clickModal(image)}
                  open={open}
                  currentModal={currentModal}
                  dialog={classes.dialog}
                  modal={classes.modal}
                  overlay={classes.overlay}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Images;
