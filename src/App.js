import React, { useState } from "react";
import Images from "./components/Images.js";
import Container from "@material-ui/core/Container";
import axios from "axios";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

const API_URL = "http://shibe.online/api/shibes?count=12";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

function App() {
  const classes = useStyles();

  const [shibas, setShibas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [wayPointActivated, setWaypoint] = useState(false);

  const fetchShibas = () => {
    setLoading(true);
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        setShibas(response.data);
        setLoading(false);
        setText("more");
        setWaypoint(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          Press Button for {text} Doge
        </Button>

        {loading ? <div>loading...</div> : <Images shiba={shibas} />}
        <Waypoint
          onEnter={() => {
            if (wayPointActivated && shibas) {
              fetchShibas();
            }
          }}
        >
          <div style={{ display: "block", height: "200px" }} />
        </Waypoint>
      </Container>
    </div>
  );
}

export default App;
