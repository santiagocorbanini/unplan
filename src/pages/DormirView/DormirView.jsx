import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './DormirView.css'; // Asegúrate de importar el archivo CSS

const hoteles = [
    {
        id: 1,
        nombre: "hotel Uno",
        instagram: "@hoteluno",
        direccion: "Calle Falsa 123",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "hotel Dos",
        instagram: "@hoteldos",
        direccion: "Avenida Siempre Viva 456",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "hotel Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "hotel Cuatro",
        instagram: "@hotelcuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 1,
        nombre: "hotel Uno",
        instagram: "@hoteluno",
        direccion: "Calle Falsa 123",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 2,
        nombre: "hotel Dos",
        instagram: "@hoteldos",
        direccion: "Avenida Siempre Viva 456",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 3,
        nombre: "hotel Tres",
        instagram: "@restauranetres",
        direccion: "Boulevard de los Sueños Rotos 789",
        logo: "./../../../public/unplan-logo.jpg"
    },
    {
        id: 4,
        nombre: "hotel Cuatro",
        instagram: "@hotelcuatro",
        direccion: "Plaza de la Libertad 101",
        logo: "./../../../public/unplan-logo.jpg"
    }
];

const DormirView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">hoteles de mi ciudad</h1>
                <Row>
                    {hoteles.map((hotel) => (
                        <Col xs={12} sm={6} md={6} lg={3} key={hotel.id} className="mb-4">
                            <Card className="text-center no-border">
                                <Card.Img variant="top" src={hotel.logo} className="rounded-circle logo-img" />
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