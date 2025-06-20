import { useQuery } from '@tanstack/react-query';
import { fetchEventos } from '../services/api';
import EventoCard from '../components/EventoCard/EventoCard';
import Filtros from '../components/Filtros';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SkeletonScreen from '../components/SkeletonScreen';
import unplanLogo from './../assets/unplan-logo.jpg'; // Asegúrate de que la ruta sea correcta

const HomeView = () => {
    const [filtro, setFiltro] = useState('todos');
    const [fechaSeleccionada, setFechaSeleccionada] = useState('');

    const { data: eventosData, isLoading, error } = useQuery({
        queryKey: ['eventos'],
        queryFn: fetchEventos,
    });

    const eventosFiltrados = Array.isArray(eventosData?.data)
        ? eventosData.data.filter(evento => {
            const cumpleFiltro =
                filtro === 'todos' ||
                (Array.isArray(evento.categories) &&
                    evento.categories.some(cat => cat.toLowerCase() === filtro.toLowerCase()));

            const cumpleFecha = !fechaSeleccionada ||
                (evento.event_date &&
                    new Date(evento.event_date).toISOString().split('T')[0] === fechaSeleccionada);

            return cumpleFiltro && cumpleFecha;
        })
        : [];

    if (isLoading) {
        return <SkeletonScreen />;
    }

    if (error) {
        return <div className="text-center">Error cargando eventos</div>;
    }

    return (
        <div className="min-vh-100">
            <Container className="py-3 justify-items-center">
                <img
                    src={unplanLogo}
                    width="130"
                    alt="Logo"
                    className="d-block mx-auto rounded-circle"
                />
                <Filtros setFiltro={setFiltro} filtroActual={filtro} />
                <div className="text-center my-3">
                    <label htmlFor="fecha" className="mb-2">Buscar por fecha:</label>
                    <input
                        type="date"
                        id="fecha"
                        className="form-control w-auto mx-auto"
                        value={fechaSeleccionada}
                        onChange={e => setFechaSeleccionada(e.target.value)}
                    />
                </div>
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
