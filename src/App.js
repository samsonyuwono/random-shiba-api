import React, { useState, useEffect } from "react";
import Images from "./components/Images.js";
import Container from "@material-ui/core/Container";
import axios from "axios";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const API_URL = "http://shibe.online/api/shibes?count=20";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

const useFetch = () => {
  const [shiba, setShiba] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        setShiba(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(shiba);
  return { shiba, loading };
};

function App() {
  const { shiba, loading } = useFetch();
  const classes = useStyles();
  console.log(shiba);
  const clickHandler = (shiba, loading) => {
    if (shiba) {
      console.log("here");
    }
  };
  return (
    <div className="App">
      <Container fixed>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={clickHandler}
        >
          Press Button for Doge
        </Button>
        {loading ? <div>loading...</div> : <Images shiba={shiba} />}
      </Container>
    </div>
  );
}

export default App;
