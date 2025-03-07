import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { current, getOneUser } from "../Redux/Actions/AuthActions";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const UserDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser(id));
  }, [dispatch, id]);

  const oneUser = useSelector((state) => state.AuthReducer.oneUser);

  return (
    <div className="user-description-container">
      {oneUser ? (
        <Card className="user-card">
          <Card.Body>
            <Card.Img variant="top" src={oneUser.image} className="user-image" />
            <Card.Title className="user-name">{oneUser.name}</Card.Title>
            <Card.Subtitle className="user-email mb-2 text-muted">{oneUser.email}</Card.Subtitle>
          </Card.Body>
        </Card>
      ) : (
        <h2 className="no-user-message">Mazel</h2>
      )}
    </div>
  );
};

export default UserDescription;
