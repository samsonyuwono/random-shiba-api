import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = (props) => {
  return (
    <CircularProgress
      style={{
        width: "30%",
        height: "100%",
        position: "relative",
      }}
      color="primary"
    />
  );
};

export default Spinner;
