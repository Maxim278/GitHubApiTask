import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "../Reducers/mainPageReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPageState : mainPageReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;