import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const ModalComponent = ({ isOpen, setIsopen, vehicle }) => {
  const handleOpen = () => setIsopen(true);
  const handleClose = () => setIsopen(false);

  return createPortal(
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#444",
            }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Vehicle Description
          </Typography>
          <Typography component="div" variant="body1">
            <p>
              <strong>Manufacturer:</strong> {vehicle.make}
            </p>
            <p>
              <strong>Model:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Class:</strong> {vehicle.vclass}
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>,
    document.getElementById("portal")
  );
};

export default ModalComponent;
