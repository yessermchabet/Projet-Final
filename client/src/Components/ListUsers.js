import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser"

const ListUsers=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const users = useSelector(state => state.AuthReducer.users)

    return(
        <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap', rowGap :'20px'}}>
            {
                users.map((el,i,t)=> <CardUser key={el._id} el={el}/>)
            }
        </div>
    )
}

export default ListUsers