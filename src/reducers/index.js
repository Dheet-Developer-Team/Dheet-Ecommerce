import getProductsReducer from "./getProductsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: getProductsReducer,
});

export default rootReducer;
