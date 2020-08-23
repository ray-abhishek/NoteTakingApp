import React from 'react'
import { toggleSidebar } from '../../Redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox'
import { useDispatch, useSelector } from 'react-redux'


export default function Header(){

    const { activeTab } = useSelector(state => state)
    const dispatcher = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Handling BARS Click")
        dispatcher(toggleSidebar())
    }

    return (
        <div style={container}>
            <button style={buttonStyle} onClick={(e)=>{
                handleClick(e)}}><FontAwesomeIcon icon={faBars} /></button>
            <h2 style={titleStyle}>{activeTab.length>0 ? activeTab : "Keep"}</h2>
            <SearchBox/>
        </div>
    )
}

const container = {
    display : 'flex',
    justifyContent : 'start'
}

const buttonStyle = {
    marginLeft : '20px',
    color : 'white',
    backgroundColor : 'black',
    border : '0px solid',
    fontSize : '20px',
    cursor : 'pointer',
}

const titleStyle = {
    marginLeft : '17px',
    width : '100px',
}