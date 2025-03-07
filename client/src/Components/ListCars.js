import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/CarActions"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CardCar from "./CardCar"

const ListCars=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])

    const cars = useSelector(state => state.CarsReducer.cars)

    const [marque, setMarque] = useState("");
  const [puissance, setPuissance] = useState("");
  const [nbrCylindre, setNbrCylindre] = useState("");
  const [boite, setBoite] = useState("");

  // Récupérer les valeurs uniques pour les dropdowns
  const uniquePuissance = [...new Set(cars.map(car => car.puissance))];
  const uniqueCylindre = [...new Set(cars.map(car => car.nbr_Cylindre))];
  const uniqueBoite = [...new Set(cars.map(car => car.boite))];

  // Filtrer les voitures en fonction des critères
  const filteredCars = cars.filter(car =>
    (marque ? car.marque.toLowerCase().includes(marque.toLowerCase()) : true) &&
    (puissance ? car.puissance === puissance : true) &&
    (nbrCylindre ? car.nbr_Cylindre === nbrCylindre : true) &&
    (boite ? car.boite === boite : true)
  );
    return(
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Car List</h2>

  
        {/* Filtres */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          {/* Filtre par marque */}
          <input
            type="text"
            placeholder="Rechercher par marque..."
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
  
          {/* Filtre par puissance */}
          <select value={puissance} onChange={(e) => setPuissance(e.target.value)} style={dropdownStyle}>
            <option value="">Toutes puissances</option>
            {uniquePuissance.map((p, index) => (
              <option key={index} value={p}>{p}</option>
            ))}
          </select>
  
          {/* Filtre par nombre de cylindres */}
          <select value={nbrCylindre} onChange={(e) => setNbrCylindre(e.target.value)} style={dropdownStyle}>
            <option value="">Tous cylindres</option>
            {uniqueCylindre.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
  
          {/* Filtre par boîte */}
          <select value={boite} onChange={(e) => setBoite(e.target.value)} style={dropdownStyle}>
            <option value="">Toutes boîtes</option>
            {uniqueBoite.map((b, index) => (
              <option key={index} value={b}>{b}</option>
            ))}
          </select>
        </div>
  
        {/* Liste des voitures filtrées */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
           
              <CardCar key={car._id}  car={car}/>
            ))
          ) : (
            <p>Aucune voiture ne correspond aux critères de recherche.</p>
          )}
        </div>
      </div>
    )
}
const dropdownStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
    cursor: "pointer",
  };
  

export default ListCars
