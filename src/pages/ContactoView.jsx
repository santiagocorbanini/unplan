import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactoView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Contactos</h1>
                <Row>
                    <Col md={6}>
                        <h2>Envíanos un mensaje</h2>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" />
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h2>Información de Contacto</h2>
                        <p><strong>Email:</strong> contacto@tuempresa.com</p>
                        <p><strong>Teléfono:</strong> +123 456 7890</p>
                        <p><strong>Redes Sociales:</strong></p>
                        <ul>
                            <li><a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactoView;