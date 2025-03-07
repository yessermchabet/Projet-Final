import { Route, Routes } from 'react-router-dom';

import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import ErrorsCom from './Components/ErrorsCom';
import ListUsers from './Components/ListUsers';
import EditUser from './Components/EditUser';
import ListCars from './Components/ListCars';
import CarsDescription from './Components/CarsDescription';
import NewCar from './Components/NewCars';
import EditCar from './Components/EditCar';
import ListRendezvous from './Components/ListRendezvous';
import ListMyRendezvous from './Components/ListMyRendezvous';
import UserDescription from './Components/UserDescription';

function App() {
  return(
    <div>
      <NavAuth/>
      <ErrorsCom/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/ListUsers' element={<ListUsers/>}/>
        <Route path='/EditUser' element={<EditUser/>}/>
        <Route path='/Cars' element={<ListCars/>}/>
        <Route path='/CarsDescription/:id' element={<CarsDescription/>}/>
        <Route path='/NewCar' element={<NewCar/>}/>
        <Route path='/EditCar/:id' element={<EditCar/>}/>
        <Route path='/ListRendezvous' element={<ListRendezvous/>}/>
        <Route path='/ListMyRendezvous' element={<ListMyRendezvous/>}/>
        <Route path='/UserDescription/:id' element={<UserDescription/>}/>

      </Routes>
    </div>
  )
}

export default App;
