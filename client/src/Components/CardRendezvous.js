import { useDispatch } from "react-redux"
import { validateStatus } from '../Redux/Actions/RendezvousActions';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from "lucide-react";

const CardRendezvous = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <tr className="card-row">
      <td>{el.date}  {el.time} </td>
      <td><Link to={`/UserDescription/${el?.owner?._id}`}>{el?.owner?.name}</Link></td>
      <td>{el?.car?.marque}</td>
      <td className={`status-${el.status.toLowerCase().replace(' ', '-')}`}>{el.status}</td>
      <td>
        {el.status === "In progress" && (
          <div className="btn-group">
            <div className="button-container">
      <button
        className="action-button accept"
        onClick={() => dispatch(validateStatus(el._id, { status: "Accepted" }))}
      >
        <CheckCircle size={18} /> Accept
      </button>

      <button
        className="action-button reject"
        onClick={() => dispatch(validateStatus(el._id, { status: "Rejected" }))}
      >
        <XCircle size={18} /> Reject
      </button>
    </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default CardRendezvous;
