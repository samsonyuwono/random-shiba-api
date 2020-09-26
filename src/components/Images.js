import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Images = (props) => {
  const classes = useStyles();
  console.log(props);
  const shibas = props.shiba;
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
          {shibas.map((char, i) => (
            <Grid key={i} item>
              <Paper>
                <img className={classes.paper} key={i} src={char} alt="shibe" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Images;
