
const SET_MINIMIZED = "SET_MINIMIZED"
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB"
const FETCH_NOTES = "FETCH_NOTES"
const FETCH_ARCHIVED = "FETCH_ARCHIVED"
const SEARCH_RESULTS = "SEARCH_RESULTS"
const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS"
const CREATE_ITEM = "CREATE_ITEM"
const ARCHIVE_ITEM = "ARCHIVE_ITEM"
const PIN_ITEM = "PIN_ITEM"
const UNPIN_ITEM = "UNPIN_ITEM"
const DELETE_ITEM = "DELETE_ITEM"
const TOGGLE_MODAL = "TOGGLE_MODAL"

const toggleModal = () => ({
    type : TOGGLE_MODAL
})

const toggleSidebar = () => ({
    type : SET_MINIMIZED
})

const createItem = (payload) => ({
    type : CREATE_ITEM,
    payload : payload
})

const archiveItem = (payload) => ({
    type : ARCHIVE_ITEM,
    payload : payload
})

const pinItem = (payload) => ({
    type : PIN_ITEM,
    payload : payload
})

const unpinItem = (payload) => ({
    type : UNPIN_ITEM,
    payload : payload
})

const deleteItem = (payload) => ({
    type : DELETE_ITEM,
    payload : payload
})



const resetSearchDisplay = () => ({
    type : RESET_SEARCH_RESULTS,
})

const getSearchResults = (payload) => ({
    type : SEARCH_RESULTS,
    payload : payload
})

const setActiveTab = (payload) => ({
    type : SET_ACTIVE_TAB,
    payload : payload
})

const fetchNotes = () => ({
    type : FETCH_NOTES,
})

const fetchArchived = () => ({
    type : FETCH_ARCHIVED,
})

export {
    RESET_SEARCH_RESULTS,
    SET_MINIMIZED,
    SET_ACTIVE_TAB,
    FETCH_NOTES,
    FETCH_ARCHIVED,
    SEARCH_RESULTS,
    CREATE_ITEM,
    PIN_ITEM,
    UNPIN_ITEM,
    ARCHIVE_ITEM,
    DELETE_ITEM,
    TOGGLE_MODAL,
    toggleModal,
    createItem,
    pinItem,
    unpinItem,
    archiveItem,
    deleteItem,
    fetchNotes,
    fetchArchived,
    setActiveTab,
    toggleSidebar,
    getSearchResults,
    resetSearchDisplay,
}