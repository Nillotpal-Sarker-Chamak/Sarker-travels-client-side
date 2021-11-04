import React from 'react';
import { ListGroup } from 'react-bootstrap';
const CountryOperations = () => {
    return (
        <div className="container-fluid">
            <h1>List of Countries Where we operate:</h1>
            <div className="container-fluid">
                <ListGroup as="ol" >
                    <ListGroup.Item as="li"><span className="fs-1">Bangladesh</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">England</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">United Kingdom</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Nepal</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Bhutan</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">India</span></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default CountryOperations;