import React, { useState } from 'react'
import './Modal.css'
import { createItem } from '../../Redux/action'
import { useDispatch } from 'react-redux';
const shortid = require('shortid');

const Modal = ({ handleClose, show }) => {

    const displayToggle = show ? "modal display-block" : "modal display-none";
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const dispatcher = useDispatch()

    const saveNote = (e) => {
        e.preventDefault()
        const payload = {
            "title" : title,
            "content" : description,
            "id" : shortid.generate(),
        }
        dispatcher(createItem(payload))
        handleClose()
    }

    const handleClick = (e) => {
      console.log(e.target.className," is e.target")
      if(e.target.className.includes("modal display")){
        handleClose()
      }
    }

    return (
      <div className={displayToggle} onClick={(e)=>{handleClick(e)}}>
        <section className="modal-main" style={{display:'flex',flexDirection:'column'}}>
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