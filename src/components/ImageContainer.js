import React, { useState, useEffect } from "react";
import Images from "./Images.js";
import FetchButton from "./Button.js";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Waypoint } from "react-waypoint";
// import { useFetch } from "../hooks/useFetch";
import Spinner from "./Spinner";
function ImageContainer() {
  const [shibas, setShibas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wayPointActivated, setWaypoint] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentModal, setModal] = useState("");
  const API_URL = "http://shibe.online/api/shibes?count=20";
  const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

  const fetchShibas = () => {
    setLoading(true);
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then((response) => {
        setShibas([...shibas, ...response.data]);
        setLoading(false);
        setWaypoint(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  //   const [shibas, loading, waypointActivated] = useFetch(
  //     API_URL + CORS_ANYWHERE
  //   );

  const clickModal = (e) => {
    setModal(e);
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <Container fixed>
      <FetchButton fetchShibas={fetchShibas} />
      <Images
        shiba={shibas}
        loading={loading}
        clickModal={clickModal}
        open={open}
        currentModal={currentModal}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Waypoint
          onEnter={() => {
            if (wayPointActivated && shibas) {
              fetchShibas();
            }
          }}
        >
          <div style={{ display: "block", height: "100px" }} />
        </Waypoint>
      )}
    </Container>
  );
}

export default ImageContainer;
