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

function App() {
  const classes = useStyles();

  const [shibas, setShibas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShibas = () => {
    setLoading(true);
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        setShibas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(shibas);

  return (
    <div className="App">
      <Container fixed>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={fetchShibas}
        >
          Press Button for Doge
        </Button>
        {loading ? <div>loading...</div> : <Images shiba={shibas} />}
      </Container>
    </div>
  );
}

export default App;
