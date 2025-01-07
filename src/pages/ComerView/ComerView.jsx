import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './ComerView.css';

const restaurantes = [
    {
        id: 1,
        nombre: "Restaurante Uno",
        instagram: "@restauranteuno",
        direccion: "Calle Falsa 123",
        logo: "/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "Restaurante Dos",
        instagram: "@restaurantedos",
        direccion: "Avenida Siempre Viva 456",
        logo: "/public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "Restaurante Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "Restaurante Cuatro",
        instagram: "@restaurantecuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 1,
        nombre: "Restaurante Uno",
        instagram: "@restauranteuno",
        direccion: "Calle Falsa 123",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "Restaurante Dos",
        instagram: "@restaurantedos",
        direccion: "Avenida Siempre Viva 456",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "Restaurante Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "Restaurante Cuatro",
        instagram: "@restaurantecuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    }
];

const ComerView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Restaurantes de mi ciudad</h1>
                <Row>
                    {restaurantes.map((restaurante) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={restaurante.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={restaurante.logo} className="rounded-circle logo-img" />
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