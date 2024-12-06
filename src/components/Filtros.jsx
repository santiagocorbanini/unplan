import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Filtros = ({ setFiltro, filtroActual }) => (
    <div className="d-flex justify-content-center my-4">
        <ButtonGroup>
            <Button
                className="mx-2"
                variant={filtroActual === 'todos' ? 'primary' : 'outline-primary'}
                onClick={() => setFiltro('todos')}
            >
                Todos
            </Button>
            <Button
                className="mx-2"
                variant={filtroActual === 'rock' ? 'primary' : 'outline-primary'}
                onClick={() => setFiltro('rock')}
            >
                Rock
            </Button>
            <Button
                className="mx-2"
                variant={filtroActual === 'jazz' ? 'primary' : 'outline-primary'}
                onClick={() => setFiltro('jazz')}
            >
                Jazz
            </Button>
        </ButtonGroup>
    </div>
);

export default Filtros;