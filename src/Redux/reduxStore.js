import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "../Reducers/mainPageReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPageState : mainPageReducer,
    //commitPageState : commitPageReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;