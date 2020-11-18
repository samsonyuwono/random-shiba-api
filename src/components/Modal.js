import React from "react";

const Modal = ({ clickModal, dialog, modal, currentModal }) => {
  return (
    <div>
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
  );
};

export default Modal;
