import axios from "axios"
import { GETCARS, GETONECAR } from "../ActionTypes/CarTypes"
import { FAIL } from "../ActionTypes/AuthTypes"

export const getCars=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/car/getCar')

        dispatch(
            {
                type : GETCARS,
                payload : res.data.Cars
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



export const getOneCars=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/car/getOneCar/${id}`)

        dispatch(
            {
                type : GETONECAR,
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


export const addCar=(newCar,navigate)=>async(dispatch)=>{
    try {
        if (newCar.image && newCar.image !== "/ferrari.jpg"){
            const formData = new FormData()
            formData.append('image', newCar.image)
            const res = await axios.post('https://api.imgbb.com/1/upload?key=bcdae5cfdc39c693a0a7d46bdd5af10c', formData)
            newCar.image = res.data.data.url
        }else{
            delete newCar.image
        }
        await axios.post('/api/car/addCar',newCar)

        dispatch(getCars())

        navigate('/Cars')
        
    } catch (error) {
        console.log(error)
    }
}




export const editCar=(id, cordCar,navigate)=>async(dispatch)=>{
    try {
        // console.log(cordCar)
        // var updatedCar = {...cordCar}
        // if(cordCar.image && cordCar.image instanceof File){
            const formData = new FormData()
            formData.append('image', cordCar.image)
            // console.log(formData)
            // console.log(updatedCar)

            const res = await axios.post('https://api.imgbb.com/1/upload?key=bcdae5cfdc39c693a0a7d46bdd5af10c', formData)
            cordCar.image = res.data.data.url
        // }
        await axios.put(`/api/car/updateCar/${id}`,cordCar)

        dispatch(getOneCars(id))

        navigate(`/CarsDescription/${id}`)
    } catch (error) {
        dispatch(
            {
                type : FAIL, 
                payload : error.response.data.errors
            }
        )
    }
}

export const DeleteCar=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/car/deleteCar/${id}`)
        
        dispatch(getCars())

        navigate('/Cars')
    } catch (error) {
        console.log(error)
    }
}   