import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { current, logout } from '../Redux/Actions/AuthActions';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavAuth = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.AuthReducer.user);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src="/gb.png" alt="Logo" className="navbar-logo glow-effect" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link glow-effect">
              <i className="fa-solid fa-house"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Cars" className="nav-link glow-effect">
              <i className="fa-solid fa-car"></i> Cars
            </Nav.Link>

            {token && user ? (
              <>
                <Stack direction="row" spacing={1} as={Link} to="/Profil" className="profile-chip">
                  <Chip
                    avatar={<Avatar alt={user.name} src={user?.image} />}
                    label={user.name}
                    variant="outlined"
                    className="user-chip glow-effect"
                  />
                </Stack>

                {user.role === 'admin' ? (
                  <>
                    <Nav.Link as={Link} to="/ListUsers" className="nav-link glow-effect">
                      <i className="fa-solid fa-users"></i> Users
                    </Nav.Link>
                    <Nav.Link as={Link} to="/NewCar" className="nav-link glow-effect">
                      <i className="fa-solid fa-plus"></i> New Car
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ListRendezvous" className="nav-link glow-effect">
                      <i className="fa-solid fa-calendar-days"></i> Rendez-vous
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/ListMyRendezvous" className="nav-link glow-effect">
                    <i className="fa-solid fa-calendar-check"></i> My Rendez-vous
                  </Nav.Link>
                )}

                <Nav.Link onClick={handleLogout} className="nav-link logout-link glow-effect">
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Register" className="nav-link glow-effect">
                  <i className="fa-solid fa-user-plus"></i> Register
                </Nav.Link>
                <Nav.Link as={Link} to="/Login" className="nav-link glow-effect">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavAuth;