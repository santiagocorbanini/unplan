import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './ComerView.css';
import { restaurantes } from "../../data/restaurantes";

const ComerView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Restaurantes de mi ciudad</h1>
                <Row>
                    {restaurantes.map((restaurante) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={restaurante.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={restaurante.logo} className="rounded-circle logo-img mb-3" />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold">{restaurante.nombre}</Card.Title>
                                    <Card.Text>
                                        {restaurante.instagram}<br />
                                        {restaurante.direccion}
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

export default ComerView;