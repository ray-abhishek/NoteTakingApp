import React, { useState } from 'react'
//import styles from './Note.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { archiveItem, pinItem, deleteItem, unpinItem } from '../../Redux/action'
import Modal from './DisplayModal'
import './Note.css'

export default function Note({data, pinned, type}){

    const [ showModal , setShowModal ] = useState(false)
    const dispatcher = useDispatch()

    const handleClick = (e, callback) => {
        e.preventDefault()
        dispatcher(callback(data))
    } 
    const {title, content, id} = data

    return (
        <>
        
            <Modal show={showModal} handleClose={()=>setShowModal(false)}>
                <h1>{title}</h1>
                <p>{content}</p>
            </Modal>
        <section className="container" onClick={()=>{console.log("Show Modal")
                                                    setShowModal(true)}}>
            <h1>{title}</h1>
            <div>{content}</div>
            <div className="options" style={type!=="Notes" ? {display:'none'} : {}}>
                <button onClick={(e)=>handleClick(e,archiveItem)}>Archive</button>
                {   
                    pinned ? 
                    <button onClick={(e)=>handleClick(e,unpinItem)}>Unpin</button>
                    :
                    <button onClick={(e)=>handleClick(e,pinItem)}>Pin</button>
                }
                
                <button onClick={(e)=>handleClick(e,deleteItem)}>Delete</button>
            </div>
        </section>
        
        </>
    )
}

