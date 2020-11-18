import React from "react";

//pass on src to child component

const SingleImage = ({
  className,
  src,
  style,
  handleClick,
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
        onClick={handleClick}
        open={false}
      />
      {open && (
        <dialog
          className={dialog}
          style={{ position: "absolute" }}
          open
          onClick={handleClick}
        >
          <img
            className={modal}
            src={currentModal}
            onClick={handleClick}
            alt="modal"
          />
        </dialog>
      )}
    </div>
  );
};

export default SingleImage;
