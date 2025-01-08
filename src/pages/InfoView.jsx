import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InfoView = () => {
    return (
        <div className="min-vh-100">
            <Container className="py-5">
                <h1 className="text-center mb-4">Info útil de la ciudad</h1>
                <Row>
                    <Col md={6}>
                        <h2>Cómo llegar</h2>
                        <p>Puedes acceder a Junín en autobús desde Buenos Aires. Varias compañías ofrecen servicios cómodos y seguros. Consulta plataformas como Busbud para encontrar pasajes.</p>
                    </Col>
                    <Col md={6}>
                        <h2>Números útiles</h2>
                        <ul>
                            <li><strong>Centro de Información Turística:</strong> 4631622 (Bmé. Mitre 16)</li>
                            <li><strong>Emergencias:</strong> 911</li>
                            <li><strong>SAME:</strong> 107</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Atractivos turísticos</h2>
                        <ul>
                            <li>Parque Natural Laguna de Gómez</li>
                            <li>Parque Municipal Borchex</li>
                            <li>Plaza 25 de Mayo</li>
                            <li>Plaza 9 de Julio</li>
                            <li>Laguna El Carpincho</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h2>Transporte local</h2>
                        <p>Colectivos y taxis disponibles en toda la ciudad.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Taxis</h2>
                        <ul>
                            <li>Avenidad</li>
                            <li>Centro</li>
                            <li>Plaza Alem</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InfoView;