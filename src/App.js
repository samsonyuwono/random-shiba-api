import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://shibe.online/api/shibes?count=1";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        console.log(response);

        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { data, loading };
};

function App() {
  const [count, setCount] = useState(0);

  const { data, loading } = useFetch("http://shibe.online/api/shibes?count=1");
  return (
    <div className="App">
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <img src={data} alt="shibe" />
        </div>
      )}
    </div>
  );
}

export default App;
