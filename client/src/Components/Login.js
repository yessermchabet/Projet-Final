import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/AuthActions';

const Login =()=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handelLogin=(e)=>{
      e.preventDefault()
      dispatch(login({email,password} , navigate))
    }

    return(
      <div style={{display:'flex',justifyContent:'space-around',marginTop :'30px', alignItems:'center',flexDirection:'column'}}>
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-around',width: '150px'}}>
          <i class="fa-solid fa-right-to-bracket fa-2xl"></i>    
          <h2 style={{    marginTop: "8px"}}>Login</h2>    
        </div>
        <Form style={{width :'400px'}}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={(e)=>handelLogin(e)} variant="primary" type="submit">
          Submit
        </Button>
        <h3 style={{marginTop: "12px", fontSize: "18px"}}>Don't have an account? <Link to='/Register' style={{color:'#F4C432', textDecoration:'none'}}>Sign Up</Link></h3>
      </Form>
      </div>
        
    )
}

export default Login