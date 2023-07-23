import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

function CustomModal({ show, setShow, title, content }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content()}</Modal.Body>
      </StyledModal>
    </>
  );
}

export default CustomModal;

const StyledModal = styled(Modal)`
  .modal-header {
    border: none !important;
  }
  padding-bottom: 10px;
`;
