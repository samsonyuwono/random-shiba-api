import { useState } from "react";
import axios from "axios";

const [shibas, setShibas] = useState([]);
const [loading, setLoading] = useState(false);
const [wayPointActivated, setWaypoint] = useState(false);

export const useFetch = (url) => {
  axios
    .get(url)
    .then((response) => {
      setShibas([...shibas, ...response.data]);
      setLoading(false);
      setWaypoint(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  return [shibas, loading, wayPointActivated];
};
