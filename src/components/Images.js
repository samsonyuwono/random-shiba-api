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
}));

const Images = (props) => {
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
        <Grid container justify="center" spacing={8}>
          {props.shiba.map((image, i) => (
            <Grid key={i} item>
              <Paper>
                <SingleImage
                  className={props.loading ? classes.loading : classes.paper}
                  src={image}
                  key={i}
                  alt="shibe"
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
