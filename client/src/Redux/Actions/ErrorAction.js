import { CLEARERROR, HANDLERROR } from "../ActionTypes/ErrorTypes"


export const handleError=(msg)=>(dispatch)=>{
    try {
        const id = Math.random()
            dispatch(
                {
                    type : HANDLERROR,
                    payload : {msg,id}
                }
            )

            setTimeout(() => {
                dispatch(
                    {
                        type : CLEARERROR,
                        payload : id
                    }
                )
            }, 3000);
    } catch (error) {
        console.log(error)
    }
}