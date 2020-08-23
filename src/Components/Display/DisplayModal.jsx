import React from 'react'
import './Modal.css'

const Modal = ({ handleClose, show , children, add }) => {
    const displayToggle = show ? "modal display-block" : "modal display-none";
    
    return (
      <div className={displayToggle}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };

export default Modal



