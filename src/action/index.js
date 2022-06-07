import axios from "axios"

export const getTodo=()=>{
    return{
        type:"GET_TODO"
    }
}

export const getTodosuccess=(data)=>{
    return{
        type:"GET_TODO_SUCCESS",
        payload:data
    }
}

 const getTodofailure=(err)=>{
    return{
        type:"GET_TODO_SUCCESS",
        payload:err
    }
}

 const createTodo=()=>{
    return{
        type:"CREATE_TODO"
    }
}

const complteitem=()=>{
    return {
        type:"ITEM_COMPLETED"
    }
}

const singleitem=(data)=>{
    return {
        type:"SINGLE_TODO",
        payload:data
    }
}

export  function loaduser(){
    return function(dispatch){
        dispatch(getTodo())
        axios.get("http://localhost:8080/todo")
        .then((res)=>{
            dispatch(getTodosuccess(res.data))
            dispatch(complteitem())
        })
        .catch((err)=>dispatch(getTodofailure(err)))
    }
}
export  function createuser(data){
    return function(dispatch){
        dispatch(createTodo())
        axios.post("http://localhost:8080/todo",data).then(()=> dispatch(loaduser()))
       
    }
}

export function updatestatus(data){
    return function (dispatch){
        axios.put(`http://localhost:8080/todo/${data.id}`,data).then(()=>dispatch(loaduser()))
    }
}
export function getsingle(id){
    return function(dispatch){
        axios.get(`http://localhost:8080/todo/${id}`)
        .then((res)=>dispatch(singleitem(res.data)))
    }
}

