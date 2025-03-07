import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyRendezvous, getRendezvous } from "../Redux/Actions/RendezvousActions"
import Table from 'react-bootstrap/Table';
import CardRendezvous from "./CardRendezvous";
import CardMyrendezVous from "./CardMyrendezvous";


const ListMyRendezvous=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyRendezvous())
    },[])

    const myrendezvous = useSelector(state => state.RendezvousReducer.myrendezvous)

    return(
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Owner</th>
          <th>Marque</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            myrendezvous && myrendezvous.map((el,i,t)=>
                <CardMyrendezVous el={el}/>
            )
        }
      </tbody>
    </Table>
        </div>
    )
}

export default ListMyRendezvous