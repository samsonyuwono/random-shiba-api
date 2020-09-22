import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },

  image: {
    width: "40%",
    height: "40%",
  },
}));

const Images = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={8}>
        {props.shiba.map((char, i) => (
          <Grid key={char} item>
            <img className={classes.image} key={i} src={char} alt="shibe" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Images;
