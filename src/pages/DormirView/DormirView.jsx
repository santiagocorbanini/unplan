import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './DormirView.css';
import { hoteles } from "../../data/hoteles";

const DormirView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Hoteles de mi ciudad</h1>
                <Row>
                    {hoteles.map((hotel) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={hotel.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={hotel.logo} className="rounded-circle logo-img mb-3" />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold">{hotel.nombre}</Card.Title>
                                    <Card.Text>
                                        {hotel.instagram}<br />
                                        {hotel.direccion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default DormirView;