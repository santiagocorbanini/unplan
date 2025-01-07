import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './SalirView.css';

const boliches = [
    {
        id: 1,
        nombre: "boliche Uno",
        instagram: "@bolicheuno",
        direccion: "Calle Falsa 123",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "boliche Dos",
        instagram: "@bolichedos",
        direccion: "Avenida Siempre Viva 456",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "boliche Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "boliche Cuatro",
        instagram: "@bolichecuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 1,
        nombre: "boliche Uno",
        instagram: "@bolicheuno",
        direccion: "Calle Falsa 123",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "boliche Dos",
        instagram: "@bolichedos",
        direccion: "Avenida Siempre Viva 456",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "boliche Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "boliche Cuatro",
        instagram: "@bolichecuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    }
];

const SalirView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Bolu¡iches de mi ciudad</h1>
                <Row>
                    {boliches.map((boliche) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={boliche.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={boliche.logo} className="rounded-circle logo-img" />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold">{boliche.nombre}</Card.Title>
                                    <Card.Text>
                                        {boliche.instagram}<br />
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