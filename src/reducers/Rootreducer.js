import Artreducer from "./Artreducer";
import { combineReducers } from "redux";


const Rootreducer = combineReducers({
    art: Artreducer,
});

export default Rootreducer;