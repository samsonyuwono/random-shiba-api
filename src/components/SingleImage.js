import React from "react";

const SingleImage = (props) => {
  return (
    <img
      className={props.className}
      src={props.src}
      alt="shibe"
      style={props.style}
    />
  );
};

export default SingleImage;
