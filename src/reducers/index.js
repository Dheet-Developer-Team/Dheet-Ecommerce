
import getProductsReducer from "./getProductsReducer";
import { combineReducers } from "redux";
import artReducer from "./artReducer";
import amountReducer from "./amountReducer";
import transactionsReducer from "./transactionsReducer";
import bidsListReducer from "./bidsListReducer";
import userBidsReducer from "./userBidsReducer";

const rootReducer = combineReducers({
  art: artReducer,
  wallet_amt: amountReducer,
  transactions: transactionsReducer,
  bidsList: bidsListReducer,
  userBids: userBidsReducer,
  products: getProductsReducer,
});

export default rootReducer;