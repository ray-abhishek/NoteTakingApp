import {
    CREATE_ITEM,
    PIN_ITEM,
    UNPIN_ITEM,
    ARCHIVE_ITEM,
    DELETE_ITEM,
    RESET_SEARCH_RESULTS,
    SET_MINIMIZED,
    SET_ACTIVE_TAB,
    FETCH_NOTES,
    FETCH_ARCHIVED,
    SEARCH_RESULTS
} from './action'

import notes from './sampleNotes.json'
import archived from './sampleArchived.json'

const initialState = {
    isLoading : false,
    archived : archived || [],
    notes : notes || [],
    activeTab : "",
    minimized : false,
    searchResults : {"notes" : [], "archived" : []},
    showSearchResults : false,
    pinned : [],
}

export default function reducer( state = initialState , { type , payload }){

    console.log(type," is action type when payload is ",payload," while initial State is ",initialState)

    switch(type){
        case CREATE_ITEM:
            var newNotes = [...state.notes, payload]
            return {
                ...state,
                notes : newNotes
            }
        case PIN_ITEM:
            var newPinnedNotes = [...state.pinned, payload]
            var newNotes = state.notes.filter(note => {
                if(note["id"] === payload["id"])
                    return false
                else
                    return true 
            })
            return {
                ...state,
                pinned : newPinnedNotes,
                notes : newNotes
            }
        case UNPIN_ITEM:
            var newNotes = [...state.notes, payload]
            var newPinnedNotes = state.pinned.filter(note => {
                if(note["id"] === payload["id"])
                    return false
                else
                    return true 
            })
            return {
                ...state,
                pinned : newPinnedNotes,
                notes : newNotes
            }
        case ARCHIVE_ITEM:
            let newArchivedNotes = [...state.archived, payload]
            var newNotes = state.notes.filter(note => {
                if(note["id"] === payload["id"])
                    return false
                else
                    return true 
            })
            return {
                ...state,
                archived : newArchivedNotes,
                notes : newNotes
            }
        case DELETE_ITEM:
            var newNotes = state.notes.filter(note => {
                if(note["id"] === payload["id"])
                    return false
                else
                    return true 
            })
            return {
                ...state,
                notes : newNotes
            }
        case FETCH_NOTES:
            return {
                ...state
            }
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab : payload
            }
        case FETCH_ARCHIVED:
            return {
                ...state
            }
        case SET_MINIMIZED:
            return {
                ...state,
                minimized : !state.minimized
            }
        case SEARCH_RESULTS:
            let newSearchResultsNotes = state.notes.filter(note=>{
                if((note["title"].toLowerCase().search(payload) !== -1) || (note["content"].toLowerCase().search(payload) !== -1)){
                    return true
                }
            })

            let newSearchResultsArchived = state.archived.filter(note=>{
                if((note["title"].toLowerCase().search(payload) !== -1) || (note["content"].toLowerCase().search(payload) !== -1)){
                    return true
                }
            })
            let newSearchResults = {"notes" : newSearchResultsNotes, "archived" : newSearchResultsArchived}
            return {
                ...state,
                searchResults : newSearchResults,
                showSearchResults : true
            }
        case RESET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults : {"notes":[],"archived":[]},
                showSearchResults : false
            }
        default : console.log("Default Reducer")
                  return state 
    }
}