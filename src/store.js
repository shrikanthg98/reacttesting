import { createStore, combineReducers, applyMiddleware } from "redux";
import CountReducer from "./reducers/CountReducer";
import songReducers from "./reducers/songReducers";
import thunk from "redux-thunk";

const store = createStore(songReducers);

// let combineReducersObject = combineReducers({
// 	songs: songReducers,
// });


//const store = createStore(combineReducersObject, applyMiddleware(thunk));

export default store;
