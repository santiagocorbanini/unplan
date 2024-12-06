import { useQuery } from '@tanstack/react-query';
import { fetchEventos } from '../services/api';
import EventoCard from '../components/EventoCard/EventoCard';
import Filtros from '../components/Filtros';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SkeletonScreen from '../components/SkeletonScreen';

const HomeView = () => {
    const [filtro, setFiltro] = useState('todos');

    const { data: eventosData, isLoading, error } = useQuery({
        queryKey: ['eventos'],
        queryFn: fetchEventos,
    });

    const eventosFiltrados = eventosData?.filter(evento => {
        if (filtro === 'todos') return true;
        return evento.categoria === filtro;
    });

    if (isLoading) {
        return <SkeletonScreen />;
    }

    if (error) {
        return <div className="text-center">Error cargando eventos</div>;
    }

    return (
        <div className="min-vh-100">
            <Container className="py-5 justify-items-center">
                <img
                    src="/src/assets/unplan-logo.jpg"
                    width="130"
                    alt="Logo"
                    className="d-block mx-auto rounded-circle"
                />
                <Filtros setFiltro={setFiltro} filtroActual={filtro} />
                <Row xs={1} md={2} lg={3} className="g-4">
                    {eventosFiltrados?.map((evento, index) => (
                        <Col key={index}>
                            <EventoCard evento={evento} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomeView;
