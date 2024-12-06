import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Nav.Link as={Link} to="/">Un Plan en Junín</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#shows">¿Dónde salir?</Nav.Link>
                    <Nav.Link href="#shows">¿Dónde dormir?</Nav.Link>
                    <Nav.Link href="#informacion">¿Dónde comer?</Nav.Link>
                    <Button className="custom-button" as={Link} to="/info">
                        Contactenos
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;