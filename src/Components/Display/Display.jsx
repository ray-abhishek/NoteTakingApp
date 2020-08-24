import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Note from './Note'
import Modal from './CreateModal'


export default function Display(){

    const { activeTab, notes, archived, pinned, searchResults, showSearchResults } = useSelector(state => state)
    const [ showCreateModal , setShowModal ] = useState(false)
    var data = activeTab === "Notes" ? notes : archived

    if(showSearchResults == true){
        var data = activeTab === "Notes" ? searchResults["notes"] : searchResults["archived"]
    }

    return (
        <div style={container}>
        <div style={createContainer}>
            <button onClick={()=>setShowModal(true)} style={addButton}>ADD NOTE</button>
            <Modal show={showCreateModal} handleClose={()=>setShowModal(false)} add={true}/>
        </div>
        <div style={noteContainer}>
            { 
            activeTab === "Notes" && pinned?.map(note=>{
                return <Note pinned={true} data={note} key={note.id} type={activeTab}/>
            })
            }
            {
            data?.map(note=>{
                return <Note data={note} key={note.id} type={activeTab}/>
            })
            }
        </div>
        </div>
    )
}

const container = {
    width : '100%',
    display : 'flex',
    flexDirection : 'column'
}

const createContainer = {
    display : 'flex',
    justifyContent : 'center',
}

const noteContainer = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
}

const addButton = {
    padding : '10px 30px 10px 30px',
    borderRadius : '10px',
    border : '4px dotted grey',
    backgroundColor : 'black',
    color : 'whitesmoke',
    fontSize : '1.2rem',
    cursor : 'pointer',
}