import { FAIL, REGISTER, LOGIN, CUURRENT, LOGOUT, GETUSERS, GETONEUSER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorAction"
export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)
        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )
        navigate('/profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // ) 
        
       error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
       });

    }
}


export const login=(formCord,navigate)=>async(dispatch)=>{
    try {
         const res = await axios.post('/api/auth/SignIn',formCord)
            
         dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
         )
         navigate('/profil')

    } catch (error) {        
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
       });
    }
}


export const current=()=>async(dispatch)=>{
    try {

        const config = {
            headers :  {
                autho : localStorage.getItem('token')
            }
        }

        const res = await axios.get('/api/auth/CurrentUser',config)

        dispatch(
            {
                type : CUURRENT,
                payload : res.data
            }
        )

    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}


export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/auth/getUsers')

        dispatch(
            {
                type : GETUSERS,
                payload : res.data.persons
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}


export const editUser=(id,cordUser, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth/updateUser/${id}`,cordUser)

        dispatch(current())

        navigate('/Profil')
    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}

export const deleteUser=(id,navigate)=>async(dispatch)=>{
    try {
        dispatch(logout())

        await axios.delete(`/api/auth/deleteUser/${id}`)

        navigate('/')

    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}

export const deleteAdminUser=(id)=>async(dispatch)=>{
    try {
        

        await axios.delete(`/api/auth/deleteUser/${id}`)

        dispatch(getUsers())


    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}


export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/auth/getOneUser/${id}`)

        dispatch(
            {
                type : GETONEUSER,
                payload : res.data.found
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}