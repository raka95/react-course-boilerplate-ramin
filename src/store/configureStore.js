import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/auth";

const composeEnhacers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store creation
export default ()=>{
    const store=createStore(
        combineReducers({
            auth:authReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
        // //this is for redux developer tool extention:
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

