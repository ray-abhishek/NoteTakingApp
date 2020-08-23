import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { loadState } from '../Storage/loadData'
import { saveState } from '../Storage/saveData'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const persistedState = loadState()

const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
    saveState(store.getState());
});

export default store 
