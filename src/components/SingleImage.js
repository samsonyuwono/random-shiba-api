import React, { useEffect } from "react";

const SingleImage = (props) => {
  const loaded = props.loaded;
  console.log(loaded);

  return <img className={props.className} src={props.src} alt="shibe" />;
};

export default SingleImage;
