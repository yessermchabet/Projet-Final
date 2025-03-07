import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { current } from "../Redux/Actions/AuthActions";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Profil = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const user = useSelector((state) => state.AuthReducer.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="profile-container">
      {user ? (
        <Card className="profile-card">
          <Card.Body>
            <div className="menu-container">
              <Button
                id="menu-button"
                aria-controls={open ? "menu-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <i className="fa-solid fa-bars fa-xl menu-icon"></i>
              </Button>
              <Menu
                id="menu-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <MenuItem as={Link} to="/EditUser" className="menu-item">
                  <i className="fa-solid fa-pen menu-icon"></i> Update
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenDeleteModal(true);
                    handleClose();
                  }}
                  className="menu-item delete"
                >
                  <i className="fa-solid fa-trash menu-icon"></i> Delete
                </MenuItem>
              </Menu>
            </div>

            <div className="profile-image-container">
              <Card.Img variant="top" src={user.image} className="profile-image" />
            </div>

            <Card.Title className="profile-name">{user.name}</Card.Title>
            <Card.Subtitle className="profile-email">{user.email}</Card.Subtitle>
           
          </Card.Body>
        </Card>
      ) : (
        <h2 className="no-user-message">Mazel</h2>
      )}

      {/* Ajout du composant DeleteUser en dehors du Menu */}
      <DeleteUser show={openDeleteModal} onClose={() => setOpenDeleteModal(false)} />
    </div>
  );
};

export default Profil;
