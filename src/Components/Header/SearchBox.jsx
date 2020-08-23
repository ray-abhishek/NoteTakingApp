import React, { useState } from 'react'
import { getSearchResults, resetSearchDisplay } from '../../Redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'


export default function SearchBox(){

    const [ searchValue, setSearchValue ] = useState('')

    const dispatcher = useDispatch()
    const handleChange = async (e) => {
        await setSearchValue(e.target.value)
        dispatcher(getSearchResults(searchValue))
    }

    const handleClose = (e) => {
        e.preventDefault()
        setSearchValue("")
        dispatcher(resetSearchDisplay())
    }
    return (
        <div style={container}>
        <input type="text" value={searchValue} onChange={(e)=>handleChange(e)} style={inputStyle} placeholder="S E A R C H">

        </input>
        {searchValue.length>0 && <FontAwesomeIcon icon={faTimes} style={closeIcon}  onClick={(e)=>handleClose(e)}/>}
        </div>
    )
}

const container = {
    marginTop : '20px',
    marginLeft : '50px',
    position : 'relative'
}

const closeIcon = {
    position : 'absolute',
    zIndex : 2,
    top : '10px',
    right : '10px',
    color : 'white',
    cursor : 'pointer'
}

const inputStyle = {
    fontSize : '1rem',
    borderRadius : '10px',
    backgroundColor : 'rgb(17, 36, 56)',
    border : '0.8px solid',
    padding : '5px',
    color : 'white',
}