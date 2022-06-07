import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  loaduser, updatestatus } from "../action/index"
import { Addtodo } from "./Addtodo"




export const Todolist=()=>{
    let dispatch=useDispatch()
    const state=useSelector((state)=>state.Todoreducer.list);
    const item=useSelector((state)=>state.Todoreducer.completeditem)
    useEffect(()=>{
        dispatch(loaduser())
       
    },[])

    const handleupdate=(el)=>{
        const newdata={
            id:el.id,
            data:el.data,
            status:!el.status

        }
        dispatch(updatestatus(newdata))
    }

    console.log(state)
    return (
        <div>
            <p>completed item-{item}</p>
          <h2>Todo list</h2>
            <Addtodo/>
           <div>
              {state?state.map((el)=>{
               return <div>
                   <span>{el.data}</span>--<button onClick={()=>handleupdate(el)}>{el.status?"Complete":"Incomplete"}</button>
                   <Link to={`/todo/${el.id}`}>see more</Link>
                   <br></br><br></br>

               </div>
              }):"No data added"}
           </div>


        </div>
        
    )
}