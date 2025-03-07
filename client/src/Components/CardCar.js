import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CardCar=({car})=>{
    const token = localStorage.getItem('token')
    return(
      <div key={car._id} style={carCardStyle}>
      <Link to={token ? `/CarsDescription/${car._id}` : '/Register'}>
      <img src={car.image} alt={car.marque} style={{ width: "100%", borderRadius: "10px" }}  />
      </Link>
      <h3>{car.marque}</h3>
      <p><strong>Puissance:</strong> {car.puissance}</p>
      <p><strong>Nombre de cylindres:</strong> {car.nbr_Cylindre}</p>
      <p><strong>Boîte:</strong> {car.boite}</p>
    </div>
    )
}
const carCardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  margin: "10px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};
export default CardCar