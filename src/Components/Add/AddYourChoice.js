import axios from 'axios';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
const AddYourChoice = () => {
    const place = useRef(null);
    const imageUrl = useRef(null);
    const address = useRef(null);
    const description = useRef(null);
    const addItem = (e) => {
        e.preventDefault();
        const field = e.target.form.elements;
        axios.post('http://localhost:5000/touristSpots', { Name: place.current.value, Image: imageUrl.current.value, Address: address.current.value, Description: description.current.value }).then((res) => {
            if (res.data.insertedId) {
                alert('added successfully');
            }
            field.name.value = '';
            field.image.value = '';
            field.description.value = '';
            field.address.value = '';

        })
    }
    return (
        <div className="mx-5 my-5">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" ref={place} name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" ref={address} name="address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" ref={imageUrl} name="image" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={description} name="description" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addItem}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}
export default AddYourChoice;