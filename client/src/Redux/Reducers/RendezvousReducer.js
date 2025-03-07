import { GETMYRENDEZVOUS, GETRENDEZVOUS } from "../ActionTypes/RendezvousTypes"

const initialState = {    
   rendezvous : [],
   myrendezvous : []
}

const RendezvousReducer=(state = initialState,action)=>{
    switch (action.type) {
       case GETRENDEZVOUS : return {...state, rendezvous : action.payload}
       case GETMYRENDEZVOUS : return {...state, myrendezvous : action.payload}
        
        default:return state
    }
}

export default RendezvousReducer