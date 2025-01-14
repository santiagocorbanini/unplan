import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './SalirView.css';
import { salidas } from "../../data/salidas";

const SalirView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Teatros - Bares - Boliches</h1>
                <Row>
                    {salidas.map((boliche) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={boliche.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={boliche.logo} className="rounded-circle logo-img mb-3" />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold">{boliche.nombre}</Card.Title>
                                    <Card.Text>
                                        <a
                                            href={`https://www.instagram.com/${boliche.instagram}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-black"
                                        >
                                            @{boliche.instagram}
                                        </a><br />
                                        {boliche.direccion}
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

export default SalirView;