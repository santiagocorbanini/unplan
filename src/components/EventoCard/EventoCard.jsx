import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Instagram } from 'lucide-react';
import "./EventoCard.css";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
};

const EventoCard = ({ evento }) => (
    <Card className="h-100">
        <Card.Header className="bg-white">
            <Card.Title>{evento.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{formatDate(evento.event_date)}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{evento.venue}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Img
                variant="top"
                width={100}
                src={evento.image_url || '/path/to/placeholder.png'}
                alt={evento.title || 'Flyer'}
            />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between bg-white">
            {evento.compraLink && (
                <Button variant="outline-primary" href={evento.instagramLink} target="_blank" rel="noopener noreferrer">
                    <Instagram size={18} className="me-2" />
                    Instagram
                </Button>
            )}
            {evento.url && (
                <Button variant="primary" href={evento.url} target="_blank" rel="noopener noreferrer">
                    Comprar Entradas
                </Button>
            )}
        </Card.Footer>
    </Card>
);

export default EventoCard;