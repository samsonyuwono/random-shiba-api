import React from "react";

function handleClick() {
  console.log("The link was clicked.");
}

//pass on src to child component

const SingleImage = (props) => {
  return (
    <img
      className={props.className}
      src={props.src}
      alt="shibe"
      style={props.style}
      onClick={() => handleClick()}
    />
  );
};

export default SingleImage;
