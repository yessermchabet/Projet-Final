import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteCar, getOneCars } from "../Redux/Actions/CarActions";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { current } from "../Redux/Actions/AuthActions";
import { addRendezVous } from "../Redux/Actions/RendezvousActions";
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const CarsDescription = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneCars(id));
        dispatch(current());
    }, [dispatch, id]);

    const oneCar = useSelector(state => state.CarsReducer.oneCar);
    const user = useSelector(state => state.AuthReducer.user);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const [time, setTime] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddRV = () => {
        if (!date || !note) {
            setErrorMessage("Veuillez remplir tous les champs !");
            return;
        }
        dispatch(addRendezVous({ date, note, owner: user._id, car: oneCar._id,time }, navigate));
        setShow(false);
        setDate('');
        setNote('');
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Détails de la Voiture</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Figure>
                        <Figure.Image
                            width={500}
                            height={300}
                            alt="Not Found"
                            src={oneCar.image}
                            rounded
                        />
                    </Figure>
                </Col>
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-primary">{oneCar.marque}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Modèle :</strong> {oneCar.modoneCare}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Nombre de Places :</strong> {oneCar.nbr_Places}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Nombre de Portes :</strong> {oneCar.nbr_Portes}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Puissance Fiscale :</strong> {oneCar.puissance}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Nombre de Cylindres :</strong> {oneCar.nbr_Cylindre}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><strong>Boîte :</strong> {oneCar.boite}</Card.Subtitle>

                            {user?.role === "admin" && (
                                <>
                                    <Button as={Link} to={`/EditCar/${oneCar._id}`} variant="warning" className="me-2">Mettre à Jour</Button>
                                    <Button onClick={() => dispatch(DeleteCar(oneCar._id, navigate))} variant="danger">Supprimer</Button>
                                </>
                            )}
                            {user?.role !== 'admin' && (
                                <>
                                    <Button onClick={() => setShow(!show)} variant="light" className="mt-3">Prendre un Rendez-vous</Button>
                                    {show && (
                                        <div className="mt-2">
                                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                                            <input onChange={(e) => setDate(e.target.value)} type='date' className="form-control mb-2" />
                                            <input onChange={(e) => setTime(e.target.value)} type='time' className="form-control mb-2" />
                                            <input onChange={(e) => setNote(e.target.value)} type="text" placeholder="Note..." className="form-control mb-2" />
                                            <Button onClick={handleAddRV} variant="success">Valider</Button>
                                        </div>
                                    )}
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CarsDescription;
