import axios from "axios"
import { GETMYRENDEZVOUS, GETRENDEZVOUS } from "../ActionTypes/RendezvousTypes"
import { FAIL } from "../ActionTypes/AuthTypes"

export const getRendezvous=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/rendezvous/getRendezvous')

        dispatch(
            {
                type : GETRENDEZVOUS,
                payload : res.data.rendezvous
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


export const getMyRendezvous=()=>async(dispatch)=>{
    const config = {
        headers :  {
            autho : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/rendezvous/getMyRendezvous',config)

        dispatch(
            {
                type : GETMYRENDEZVOUS,
                payload : res.data.rendezvous
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


export const validateStatus=(id,cordRv)=>async(dispatch)=>{
    try {
        await axios.put(`/api/rendezvous/updateRendezvous/${id}`,cordRv)

        dispatch(getRendezvous())

    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}

export const addRendezVous=(newRV,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/rendezvous/addRendezvous',newRV)

        dispatch(getMyRendezvous())

        navigate('/ListMyRendezvous')
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteRendezVous=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/rendezvous/deleteRendezvous/${id}`)
        
        dispatch(getMyRendezvous())

    } catch (error) {
        console.log(error)
    }
}   