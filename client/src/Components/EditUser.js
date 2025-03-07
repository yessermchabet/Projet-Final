import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { current, editUser } from '../Redux/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    const user = useSelector(state => state.AuthReducer.user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState(user.image);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setImage(user.image);
    }, [user]);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editUser(user._id, { name, email, image }, navigate));
    };

    return (
        <Form className="edit-user-form" onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Enter name" 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Enter email" 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                    type="text" 
                    placeholder="Enter image URL" 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Edit Profile
            </Button>
        </Form>
    );
};

export default EditUser;
