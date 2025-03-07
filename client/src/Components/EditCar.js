import { useEffect, useState } from 'react';
import { FaCar, FaImage, FaClipboardList } from 'react-icons/fa'; // Import des icônes
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editCar, getOneCars } from '../Redux/Actions/CarActions';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const EditCar = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [marque, setMarque] = useState('');
    const [model, setModel] = useState('');
    const [nbr_Places, setNbr_Places] = useState('');
    const [nbr_Porte, setNbr_Porte] = useState('');
    const [puissance, setPuissance] = useState('');
    const [nbr_Cylindre, setNbr_Cylindre] = useState('');
    const [boite, setBoite] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [base64, setBase64] = useState('')

    useEffect(() => {
        dispatch(getOneCars(id)).then(() => setLoading(false));
    }, [dispatch, id]);

    const oneCar = useSelector(state => state.CarsReducer.oneCar);

    useEffect(() => {
        if (oneCar) {
            setMarque(oneCar.marque);
            setModel(oneCar.model);
            setNbr_Places(oneCar.nbr_Places);
            setNbr_Porte(oneCar.nbr_Porte);
            setPuissance(oneCar.puissance);
            setNbr_Cylindre(oneCar.nbr_Cylindre);
            setBoite(oneCar.boite);
            setImage(oneCar.image);
        }
    }, [oneCar]);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
    
            console.log("Selected file:", file); // Debugging: Check the selected file
    
            // Validate file type
            const validImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/gif"];
            if (!validImageTypes.includes(file.type)) {
                console.warn("Unsupported file type:", file.type);
                return;
            }
    
            // Ensure state gets the file object
            setImage(file);
    
            // Convert to base64 for preview
            const reader = new FileReader();
            reader.onload = () => {
                console.log("Base64 image preview:", reader.result);
                setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.warn("No file selected");
        }
    };
    
    

    const handleEdit = (e) => {
        e.preventDefault();
        // if (!marque || !model || !nbr_Places || !nbr_Porte || !puissance || !nbr_Cylindre || !boite || !image) {
        //     setErrorMessage("Veuillez remplir tous les champs !");
        //     return;
        // }
        dispatch(editCar(id, { image, marque, model, nbr_Places, nbr_Cylindre, nbr_Porte, puissance, boite }, navigate));
    };

    return (
        <Container style={{width:'900px'}} className="my-5">
            <Card className="shadow-lg">
                <Card.Header className="text-center">
                    <h2>Modifier la Voiture</h2>
                </Card.Header>
                <Card.Body>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        <>
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form onSubmit={handleEdit}>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaCar /> Marque</Form.Label>
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Entrez la marque du véhicule</Tooltip>}
                                    >
                                        <Form.Control value={marque} onChange={(e) => setMarque(e.target.value)} type="text" placeholder="Entrez la Marque" />
                                    </OverlayTrigger>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaClipboardList /> Modèle</Form.Label>
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Entrez le modèle du véhicule</Tooltip>}
                                    >
                                        <Form.Control value={model} onChange={(e) => setModel(e.target.value)} type="text" placeholder="Entrez le Modèle" />
                                    </OverlayTrigger>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de Places</Form.Label>
                                    <Form.Control value={nbr_Places} onChange={(e) => setNbr_Places(e.target.value)} type="number" placeholder="Entrez le Nombre de Places" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de Portes</Form.Label>
                                    <Form.Control value={nbr_Porte} onChange={(e) => setNbr_Porte(e.target.value)} type="number" placeholder="Entrez le Nombre de Portes" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Puissance Fiscale</Form.Label>
                                    <Form.Control value={puissance} onChange={(e) => setPuissance(e.target.value)} type="number" placeholder="Entrez la Puissance Fiscale" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de Cylindres</Form.Label>
                                    <Form.Control value={nbr_Cylindre} onChange={(e) => setNbr_Cylindre(e.target.value)} type="number" placeholder="Entrez le Nombre de Cylindres" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    {/* <Form.Label><FaImage /> Image URL</Form.Label>
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={<Tooltip>Entrez l'URL de l'image du véhicule</Tooltip>}
                                    >
                                        <Form.Control value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="Entrez l'URL de l'image" />
                                    </OverlayTrigger> */}
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Default file input example</Form.Label>
                                        <Form.Control type="file" onChange={handleFileChange}/>
                                    </Form.Group>
                                    <img src={base64 || image} alt='car img' />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Soumettre
                                </Button>
                            </Form>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditCar;
