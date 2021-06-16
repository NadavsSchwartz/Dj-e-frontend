import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="h-600 w-500 border-l-8 p-5 z-50">
      <div className="flex justify-end text-xl">
        <a href="#" onClick={handleClose}>
          <FaTimes />
        </a>
      </div>
      {title && <div>{title}</div>}
      <div className="pt-10">{children}</div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default Modal;
