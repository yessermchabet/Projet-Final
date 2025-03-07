import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/AuthActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }, navigate));
  };

  return (
    <div style={{ position: 'relative', height: '91vh', overflow: 'hidden' }}>
      {/* Vidéo d'arrière-plan */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1, 
      }}>
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(10px)',  // Ajoute un flou à la vidéo
            transform: 'scale(1.1)', // Évite de voir les bords flous
          }}
        >
          <source src="/vd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Formulaire d'inscription */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <i className="fa-solid fa-user fa-2xl"></i>
          <h2 style={{ marginLeft: '10px', fontSize: '35px', color: '#fff' }}>Register</h2>
        </div>

        <Form style={{
          width: '400px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.2)', // Fond semi-transparent
          backdropFilter: 'blur(10px)', // Effet flou pour le formulaire
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fff' }}>User Name</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fff' }}>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fff' }}>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={(e) => handleRegister(e)} variant="primary" type="submit" style={{ width: '100%' }}>
            Submit
          </Button>
          <h3 style={{marginTop: "12px", fontSize: "18px"}}>Already have an account? <Link to='/Login' style={{color:'#F4C432', textDecoration:'none'}}>Log In</Link></h3>
        </Form>
      </div>
    </div>
  );
};

export default Register;
