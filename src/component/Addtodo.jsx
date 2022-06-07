import axios from "axios"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { createuser } from "../action"
// import { createTodo, createTodosuccess, getTodosuccess } from "../action"
import { Todolist } from "./Todolist"


export const Addtodo=()=>{
    const state=useSelector((state)=>state.Todoreducer.list)
    let dispatch=useDispatch()
    const[text,setText]=useState("")
    const handlechange=(e)=>{
        setText(e.target.value)
    }

    const handleclick=async(e)=>{
        e.preventDefault()
        // dispatch(createTodo())
        
        const tododata={
            id:new Date().getTime().toString(),
            data:text,
            status:false
        }
         dispatch(createuser(tododata))
        // dispatch(createTodosuccess(res.data))
    }

    return (
        <div>
            <input type="text" name="" id="" placeholder="add todo here" onChange={handlechange} />
            <button onClick={handleclick}>Add</button>
        </div>
    )
}