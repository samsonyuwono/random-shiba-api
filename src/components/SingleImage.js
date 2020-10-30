import React from "react";

//pass on src to child component

const SingleImage = ({ className, src, style, handleClick, open }) => {
  return (
    <img
      className={className}
      src={src}
      alt="shibe"
      style={style}
      onClick={handleClick}
      open={open}
    />
  );
};

export default SingleImage;
