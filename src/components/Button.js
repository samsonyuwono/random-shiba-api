import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

const FetchButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={classes.margin}
    >
      Press Button for {props.text} Doge
    </Button>
  );
};

export default FetchButton;
