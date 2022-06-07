import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingle } from "../action";



export const Singletodo=()=>{
    let dispatch=useDispatch()
    const state=useSelector((state)=>state.singleTodoreducer);
    let param=useParams()

    useEffect(()=>{
        const{id}=param
        dispatch(getsingle(id))
       
    },[param.id])
    return (
        <div>
            {state.data}-<button>{state.status?"complete":"Incomplete"}</button>
        </div>
    )
}