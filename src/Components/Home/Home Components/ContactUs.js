import React from 'react';
import { ListGroup } from 'react-bootstrap';
const ContactUs = () => {
    return (
        <div className="bg-secondary container-fluid">
            <h1>For Any Query Contact Us:</h1>
            <div className="container-fluid">
                <ListGroup as="ol" >
                    <ListGroup.Item as="li"><span className="fs-3">Phone: 017*******</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-3">Email: ruetchamak@gmail.com</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-3">Office: Khilgaon, Dhaka</span></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default ContactUs;