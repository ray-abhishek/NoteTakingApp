import React from 'react'
import './Modal.css'


const Modal = ({ handleClose, show , children }) => {
    const displayToggle = show ? "modal display-block" : "modal display-none";
    
    const handleClick = (e) => {
      // Close Modal if User Clicks on Area outside Modal which has the string 'modal display' in its classname.
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


