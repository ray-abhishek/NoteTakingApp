import React from 'react'
import './Modal.css'

const Modal = ({ handleClose, show , children, add }) => {
    const displayToggle = show ? "modal display-block" : "modal display-none";
    
    const handleClick = (e) => {
      console.log(e.target.className," is e.target")
      if(e.target.className.includes("modal display")){
        handleClose()
      }
    }

    return (
      <div className={displayToggle} onClick={(e)=>{handleClick(e)}}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };

export default Modal



