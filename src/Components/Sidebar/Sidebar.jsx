import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../Redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-regular-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){

    const { activeTab, minimized, showSearchResults, searchResults } = useSelector(state => state)
    const dispatcher = useDispatch()

    const handleClick = (e, tab) => {
        dispatcher(setActiveTab(tab))
    }

    return (
        <>
        <ul style={container}>
            <li style={navItem}  className={activeTab==="Notes" ? "active-tab" : ""} onClick={(e)=>handleClick(e,"Notes")} >
                <FontAwesomeIcon icon={faStickyNote}/>
                <h2 style={ minimized ? hideSidebar : showSidebar }>Notes
                { showSearchResults && <span>({searchResults["notes"].length})</span>}
                </h2>
            </li>
            <li style={navItem}  className={activeTab!=="Notes" ? "active-tab" : ""} onClick={(e)=>handleClick(e,"Archived")} >
                <FontAwesomeIcon icon={faArchive}  />
                <h2 style={ minimized ? hideSidebar : showSidebar }>Archived
                { showSearchResults && <span>({searchResults["archived"].length})</span>}</h2>
            </li>
        </ul>
        </>
    )
}

const container = {
    display : 'flex',
    flexDirection : 'column',
    listStyle : 'none',
    textAlign : 'left',
    backgroundColor : 'rgb(1, 50, 56)',
    maxWidth : '40%',
    padding : '20px',
    borderTopRightRadius : '10px',
    borderBottomRightRadius : '10px',
    height : '80vh',
}

const navItem = {
    display : 'flex',
    width : '100%',
    justifyContent : 'space-between',
    margin : '10px',
    cursor : 'pointer',
}

const hideSidebar = {
    fontSize : '15px',
    marginTop : '0px',
    marginBottom : '0px',
    display : 'none'
}

const showSidebar = {
    fontSize : '15px',
    marginTop : '0px',
    marginBottom : '0px',
    display : 'block',
    width : '100px',
    marginLeft : '20px',
}