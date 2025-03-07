import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../Redux/Actions/CarActions";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
// import "./NewCar.css"; // Fichier CSS externe

const NewCar = () => {
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [nbr_Places, setNbr_Places] = useState("");
  const [nbr_Porte, setNbr_Porte] = useState("");
  const [puissance, setPuissance] = useState("");
  const [nbr_Cylindre, setNbr_Cylindre] = useState("");
  const [boite, setBoite] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [base64, setBase64] = useState('')


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewCar = (e) => {
    e.preventDefault();
    if (!marque || !model || !nbr_Places || !nbr_Porte || !puissance || !nbr_Cylindre || !boite || !image) {
        setErrorMessage("Veuillez remplir tous les champs !")
        return;
    }
    dispatch(
      addCar(
        { image, marque, model, nbr_Places, nbr_Porte, puissance, nbr_Cylindre, boite },
        navigate
      )
    );
  };

  const handleFileChange = (e)=> {
    const file = e.target.files[0]
    setImage(file)
    if(file){
      const reader = new FileReader()
      reader.onload = ()=> setBase64(reader.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <Container style={{width: '1600px',height: '690px'}} className="new-car-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-lg rounded">
            <Card.Body>
              <h2 className="text-center mb-4">Ajouter une Voiture</h2>
              <Form onSubmit={handleNewCar}>
                <Form.Group className="mb-3">
                  <Form.Label>Marque</Form.Label>
                  <Form.Control
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                    type="text"
                    placeholder="Ex: BMW, Mercedes..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Modèle</Form.Label>
                  <Form.Control
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    type="text"
                    placeholder="Ex: X5, A-Class..."
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre de Places</Form.Label>
                      <Form.Control
                        value={nbr_Places}
                        onChange={(e) => setNbr_Places(e.target.value)}
                        type="number"
                        placeholder="Ex: 5"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre de Portes</Form.Label>
                      <Form.Control
                        value={nbr_Porte}
                        onChange={(e) => setNbr_Porte(e.target.value)}
                        type="number"
                        placeholder="Ex: 4"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Puissance Fiscale</Form.Label>
                      <Form.Control
                        value={puissance}
                        onChange={(e) => setPuissance(e.target.value)}
                        type="number"
                        placeholder="Ex: 10 CV"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre de Cylindres</Form.Label>
                      <Form.Control
                        value={nbr_Cylindre}
                        onChange={(e) => setNbr_Cylindre(e.target.value)}
                        type="number"
                        placeholder="Ex: 6"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Type de Boîte</Form.Label>
                  <Form.Select value={boite} onChange={(e) => setBoite(e.target.value)} required>
                    <option value="">Choisissez un type</option>
                    <option value="Automatique">Automatique</option>
                    <option value="Manuelle">Manuelle</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange}/>
                </Form.Group>
                <img src={base64 || image} alt='car img' />

                <div className="d-grid">
                  <Button variant="primary" type="submit" className="btn-animated">
                    Ajouter la voiture
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewCar;
