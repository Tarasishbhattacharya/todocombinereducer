import { combineReducers } from "redux";
import { Todoreducer } from "./todoreducer";
import { createTodoreducer } from "./todoreducer";
import { singleTodoreducer } from "./todoreducer";


export const Rootreducer=combineReducers({
   Todoreducer,
   createTodoreducer,
   singleTodoreducer
})