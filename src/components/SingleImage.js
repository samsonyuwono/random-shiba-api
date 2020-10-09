import React, { useState } from "react";
import Spinner from "./Spinner.js";

const SingleImage = (props) => {
  return <img className={props.className} src={props.src} alt="shibe" />;
};

export default SingleImage;
