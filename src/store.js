import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Rootreducer } from "./reducer";
import thunk from "redux-thunk";



export const Store=createStore(Rootreducer,applyMiddleware(thunk))