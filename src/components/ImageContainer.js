import React, { useState, useEffect } from "react";
import Images from "./Images.js";
import FetchButton from "./Button.js";
import Container from "@material-ui/core/Container";
import { Waypoint } from "react-waypoint";
import Spinner from "./Spinner";
import { useFetch } from "../hooks/useFetch.js";
function ImageContainer() {
  const [open, setOpen] = useState(false);
  const [currentModal, setModal] = useState("");
  const { shibas, loading, waypointActivated, loadData } = useFetch();

  const fetchShibas = () => {
    loadData();
    // console.log(loading);
    // console.log("the shibas", shibas);
  };

  // console.log("the shibas", shibas);

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
            if (waypointActivated && shibas) {
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
