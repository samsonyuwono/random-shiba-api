import { useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const API_URL = "http://shibe.online/api/shibes?count=12";
  const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [waypointActivated, setWaypoint] = useState(false);

  axios
    .get(CORS_ANYWHERE + API_URL)
    .then((response) => {
      setData([...data, ...response.data]);
      setLoading(false);
      setWaypoint(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  return [data, loading, waypointActivated];
};
