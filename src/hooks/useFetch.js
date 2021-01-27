import { useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const API_URL = "http://shibe.online/api/shibes?count=20";
  const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

  const [shibas, setShibas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [waypointActivated, setWaypoint] = useState(false);

  function loadData() {
    console.log("loaddata");
    setLoading(true);
    //axios call is not being hit
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((res) => {
        setShibas([...shibas, ...res.data]);
        setLoading(false);
        setWaypoint(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("test");
        setLoading(false);
      });
  }

  return { shibas, loading, waypointActivated, loadData };
};
