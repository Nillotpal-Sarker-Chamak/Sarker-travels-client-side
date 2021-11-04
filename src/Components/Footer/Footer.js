import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer" >
            <Card style={{ borderColor: 'black', backgroundColor: 'black' }} >
                <ListGroup  >
                    <ListGroup.Item>All Rights Reserved By:</ListGroup.Item>
                    <ListGroup.Item>Nillotpal Sarker Chamak</ListGroup.Item>
                    <ListGroup.Item>Contact By : ruetchamak@gmail.com</ListGroup.Item>
                    <ListGroup.Item>Contact By : 017*********</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Footer;