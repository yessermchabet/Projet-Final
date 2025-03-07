import AuthReducer from "./AuthReducer";
import {combineReducers} from 'redux'
import ErrorsReducer from "./ErrorsReducer";
import CarsReducer from "./CarsReducer";
import RendezvousReducer from "./RendezvousReducer";

const rootReducer = combineReducers({AuthReducer,ErrorsReducer,CarsReducer,RendezvousReducer})


export default rootReducer
