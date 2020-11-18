import React from "react";
import Modal from "./Modal";

const SingleImage = ({
  className,
  src,
  style,
  clickModal,
  open,
  dialog,
  modal,
  currentModal,
}) => {
  return (
    <div>
      <img
        className={className}
        src={src}
        alt="shibe"
        style={style}
        onClick={clickModal}
        open={false}
      />
      {open && (
        <Modal
          dialog={dialog}
          clickModal={clickModal}
          modal={modal}
          currentModal={currentModal}
        />
      )}
    </div>
  );
};

export default SingleImage;
