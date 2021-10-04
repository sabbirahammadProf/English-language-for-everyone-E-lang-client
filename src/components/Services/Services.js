import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    // services state
    const [services, setServices] = useState([]);
    // get services
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div>
            <Container className="my-5">
            <h1 className="fw-bold text-center mt-5 mb-4">All of our courses</h1>
            <Row xs={1} md={3} className="g-4">    
            {
                services.map((item) => (
                <Col key={item.id}>
                <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                    <Card.Title className="fw-bold">{item.service_title}</Card.Title>
                    <Card.Text>
                        {item.service_description}
                    </Card.Text>
                    <h5 className="fw-bold">Price: ${item.price}</h5>
                    <button className="btn cs-btn-warning w-100 my-3">Enroll Now</button>
                    </Card.Body>
                </Card>
                </Col>
                ))
            }
            </Row>
            </Container>
        </div>
    );
};

export default Services;