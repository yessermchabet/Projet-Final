import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRendezvous } from "../Redux/Actions/RendezvousActions";
import Table from "react-bootstrap/Table";
import CardRendezvous from "./CardRendezvous";
import { Link } from "react-router-dom";

const ListRendezvous = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRendezvous());
  }, [dispatch]);

  const rendezvous = useSelector((state) => state.RendezvousReducer.rendezvous);

  return (
    <div className="list-container">
      <h2 className="title">Rendezvous List</h2>
      <Table responsive className="styled-table">
        <thead>
          <tr>
            <th>Date</th>
            <th to={Link} as="/Profil">Owner</th>
            <th>Marque</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendezvous && rendezvous.map((el, i) => <CardRendezvous key={i} el={el} />)}
        </tbody>
      </Table>
    </div>
  );
};

export default ListRendezvous