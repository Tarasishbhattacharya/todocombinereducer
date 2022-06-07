
const initstate={
    loading:true,
    list:[],
    error:false,
    completeditem:0
}

export const Todoreducer=(state=initstate,action)=>{
    switch(action.type){
        case "GET_TODO":{
            return {
                ...state,
                loading:true,
            }
        }
        case "GET_TODO_SUCCESS":{
            return {
                ...state,
                loading:false,
                list:action.payload
            }
        }
        case "GET_TODO_FAILURE":{
            return {
                ...state,
                loading:false,
               error:action.payload
            }
        }
        case "ITEM_COMPLETED":{
            let newarr=state.list.filter((el)=>el.status==true)
            return{
                ...state,
                completeditem:newarr.length
            }
        }
         
        default:return state
    }
}
export const createTodoreducer=(state=initstate,action)=>{
    switch(action.type){
        case "CREATE_TODO":{
            return {
                ...state,
                loading:true,
            }
        }
        case "CREATE_TODO_SUCCESS":{
            return {
                ...state,
                loading:false,
                list:action.payload
            }
        }
        case "CREATE_TODO_FAILURE":{
            return {
                ...state,
                loading:false,
               error:action.payload
            }
        }
        default:return state
    }
}

export const singleTodoreducer=(state={},action)=>{
    switch(action.type){
        case"SINGLE_TODO":{
            return{
                ...state,...action.payload
            }
        }
        default:return state
    }
}