import { GETCARS, GETONECAR } from "../ActionTypes/CarTypes"

const initialState = {    
    cars : [],
    oneCar : {}
}

const CarsReducer=(state = initialState,action)=>{
    switch (action.type) {
       
        case GETCARS : return {...state, cars : action.payload}
        case GETONECAR : return {...state, oneCar : action.payload}
        
        default:return state
    }
}

export default CarsReducer