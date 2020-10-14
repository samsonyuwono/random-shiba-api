import React, { useState } from "react";
import Images from "./Images.js";
import FetchButton from "./Button.js";
import Container from "@material-ui/core/Container";
// import axios from "axios";
// import { Waypoint } from "react-waypoint";
import { useFetch } from "../hooks/http";

function ImageContainer() {
  //   const [shibas, setShibas] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [wayPointActivated, setWaypoint] = useState(false);
  //   const API_URL = "http://shibe.online/api/shibes?count=12";
  //   const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

  //   const fetchShibas = () => {
  //     axios
  //       .get(CORS_ANYWHERE + API_URL)
  //       .then((response) => {
  //         setShibas([...shibas, ...response.data]);
  //         setLoading(false);
  //         setWaypoint(true);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(false);
  //       });
  //   };

  const [shibas, loading, waypointActivated] = useFetch();

  //   const handleClick = () => {
  //     useFetch(CORS_ANYWHERE + API_URL);
  //   };

  return (
    <Container fixed>
      <FetchButton fetchShibas={useFetch()} />

      {loading ? <div>loading...</div> : <Images shiba={shibas} />}
      {/* <Waypoint
        onEnter={() => {
          if (waypointActivated && shibas) {
            useFetch();
          }
        }}
      >
        <div style={{ display: "block", height: "100px" }} />
      </Waypoint> */}
    </Container>
  );
}

export default ImageContainer;
