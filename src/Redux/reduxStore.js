import {combineReducers, createStore} from "redux";
import mainPageReducer from "../Reducers/mainPageReducer";

let reducers = combineReducers({
    mainPageState : mainPageReducer,
    //commitPageState : commitPageReducer,
});

let store = createStore(reducers);

export default store;