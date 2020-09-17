import React, { useState, useEffect } from "react";
import "./App.css";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

function App() {
  const [count, setCount] = useState(0);

  const { data, loading } = useFetch(
    "http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]"
  );
  return (
    <div className="App">
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      {loading ? <div>loading...</div> : <div>{data}</div>}
    </div>
  );
}

export default App;
