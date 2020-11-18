import React from "react";

const Modal = ({ clickModal, dialog, modal, overlay, currentModal }) => {
  return (
    <div>
      <div className={overlay}>
        <dialog
          className={dialog}
          style={{ position: "fixed" }}
          open
          onClick={clickModal}
        >
          <img
            className={modal}
            src={currentModal}
            onClick={clickModal}
            alt="modal"
          />
        </dialog>
      </div>
    </div>
  );
};

export default Modal;
