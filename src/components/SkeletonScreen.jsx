import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SkeletonScreen.css'; // Asegúrate de crear este archivo CSS

const SkeletonScreen = () => {
    return (
        <div>
            <Container className="py-5 justify-items-center">
                {/* Skeleton para la imagen de logo */}
                <div className="skeleton logo"></div>

                {/* Skeleton para Filtros */}
                <div className="skeleton filtros"></div>

                {/* Skeleton para las tarjetas de eventos */}
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Col key={index}>
                            {/* Skeleton para una tarjeta de evento */}
                            <div className="skeleton evento"></div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default SkeletonScreen;