import React, { useState, useEffect } from "react";
import Images from "./components/Images.js";
import Container from "@material-ui/core/Container";
import axios from "axios";
import "./App.css";

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
  return (
    <div className="App">
      <Container fixed>
        {loading ? <div>loading...</div> : <Images shiba={shiba} />}
      </Container>
    </div>
  );
}

export default App;
