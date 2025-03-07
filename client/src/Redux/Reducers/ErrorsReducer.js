import { CLEARERROR, HANDLERROR } from "../ActionTypes/ErrorTypes"

const initialState = []

const ErrorsReducer=(state = initialState, action)=>{
    switch (action.type) {
        case HANDLERROR : return [...state, action.payload]
        case CLEARERROR : return state.filter((el,i,t)=> el.id != action.payload)
        default: return state
            
    }
}

export default ErrorsReducer