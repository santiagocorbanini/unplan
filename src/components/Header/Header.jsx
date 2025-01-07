import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Nav.Link as={Link} to="/"><strong>¿Qué es un Plan en Junín?</strong></Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#info" as={Link} to="/info">Info <strong>útil</strong></Nav.Link>
                    <Nav.Link href="#salir" as={Link} to="/salir">¿Dónde <strong>salir</strong>?</Nav.Link>
                    <Nav.Link href="#dormir" as={Link} to="/dormir">¿Dónde <strong>dormir</strong>?</Nav.Link>
                    <Nav.Link href="#comer" as={Link} to="/comer">¿Dónde <strong>comer</strong>?</Nav.Link>
                    <Button className="custom-button" as={Link} to="/contacto">
                        <strong>Contáctenos</strong>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;