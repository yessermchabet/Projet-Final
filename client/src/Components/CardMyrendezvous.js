import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux"
import { deleteRendezVous, validateStatus } from '../Redux/Actions/RendezvousActions';


const CardMyrendezVous=({el})=>{

  const dispatch = useDispatch()

    return(
        <tr>
          <td>{el.date}</td>
          <td>{el?.owner?.name}</td>
          <td>{el?.car?.marque}</td>
          <td>{el?.status}</td>
          <td>
            {
                el.status == 'In progress' ?
                <Button variant="success" onClick={()=> dispatch(deleteRendezVous(el._id))}>Supprimer Demande</Button> 
                :
                "No action allowed" 
            }
                 
          </td>
        </tr>
    )
}    

export default CardMyrendezVous