import React, { useState } from 'react'
import './Modal.css'
import { createItem } from '../../Redux/action'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const shortid = require('shortid');

const Modal = ({ handleClose, show }) => {

    const displayToggle = show ? "modal display-block" : "modal display-none";
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const dispatcher = useDispatch()

    const saveNote = (e) => {
        e.preventDefault()
        if(title==="" || description===""){
          alert("Field(s) cannot be empty")
        }
        else{
          const payload = {
            "title" : title,
            "content" : description,
            "id" : shortid.generate(),
          }
          dispatcher(createItem(payload))
          handleClose()
        }
    }

    const handleClick = (e) => {
      // Close Modal if User Clicks on Area outside Modal which has the string 'modal display' in its classname.
      if(e.target.className.includes("modal display")){
        handleClose()
      }
    }

    return (
      <div className={displayToggle} onClick={(e)=>{handleClick(e)}}>
        <section className="modal-main" style={{display:'flex',flexDirection:'column'}}>
          <FontAwesomeIcon icon={faTimes} style={closeIcon}  onClick={(e)=>{
          handleClose()
          e.stopPropagation()}}/>
                <h3>Title</h3>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}>
                </input>
                <h3>Description</h3>
                <textarea rows="4" value={description} onChange={(e)=>setDescription(e.target.value)}>
                </textarea>
                <button onClick={(e)=>saveNote(e)}>Save</button>
                
        </section>
      </div>
    );
  };

export default Modal


const closeIcon = {
  position : 'absolute',
  zIndex : 2,
  top : '10px',
  right : '10px',
  color : 'white',
  cursor : 'pointer',
  fontSize : '20px',
  padding : '10px',
}