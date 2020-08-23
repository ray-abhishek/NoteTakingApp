import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { loadState } from '../Storage/loadData'
import { saveState } from '../Storage/saveData'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const persistedState = loadState()

const logger = () => next => action => {
    console.log("logger: dispatching action : ",action)
    return next(action)
}

const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(logger)))

store.subscribe(() => {
    saveState(store.getState());
});

export default store 
