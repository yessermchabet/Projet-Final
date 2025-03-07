import { CUURRENT, FAIL, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState = {
    user : {},
    errors : [],
    users : [],
    oneUser : {}
}

const AuthReducer=(state = initialState,action)=>{
    switch (action.type) {
        case REGISTER : 
        localStorage.setItem('token' , action.payload.token)
        return {...state, user : action.payload.contactNew,errors : null}
        
        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state , user : action.payload.Found, errors : null}

        case CUURRENT : return {...state , user : action.payload}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : null, errors : null}

        case FAIL : return {...state, errors : action.payload,user : null}

        case GETUSERS : return {...state, users : action.payload}

        case GETONEUSER : return {...state, oneUser : action.payload}

        
        default:return state
    }
}

export default AuthReducer