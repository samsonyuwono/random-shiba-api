import { useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const API_URL = "https://shibe.online/api/shibes?count=20";

  const [shibas, setShibas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [waypointActivated, setWaypoint] = useState(false);

  function loadData() {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        setShibas([...shibas, ...res.data]);
        setLoading(false);
        setWaypoint(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return { shibas, loading, waypointActivated, loadData };
};
