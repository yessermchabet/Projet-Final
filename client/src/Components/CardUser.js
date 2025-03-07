import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteAdminUser } from "../Redux/Actions/AuthActions";

const CardUser = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{marginTop:'70px'}} className="user-card">
      <Card.Img
        variant="top"
        src={el.image || "https://via.placeholder.com/150"} // Image par défaut
        className="user-image"
      />
      <Card.Body>
        <Card.Title className="user-name"> {el.name}</Card.Title>
        <Card.Subtitle className="user-email">{el.email}</Card.Subtitle>
        <Button
          onClick={() => dispatch(deleteAdminUser(el._id))}
          variant="outline-danger"
          className="delete-btn"
        >
          Supprimer
        </Button>
      </Card.Body>        
    </Card>
  );
};

export default CardUser;
