import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://shibe.online/api/shibes?count=1";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

const useFetch = () => {
  const [shiba, setShiba] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        for (let i = 0; i < response.shiba.length; i++) {
          setShiba((shiba) => [...shiba, response.shiba]);
        }
        console.log(response);
        setShiba(response.shiba);
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {shiba.map((char) => (
            <img src={char} alt="shibe" />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
