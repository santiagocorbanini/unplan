import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { categoriasData } from './../data/categorias.js';

const Filtros = ({ setFiltro, filtroActual }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1060);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1060);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Crear un conjunto de categorías únicas
    const categoriasUnicas = ['Todos', ...new Set(categoriasData)];

    return (
        <div className="d-flex justify-content-center my-3">
            {isMobile ? (
                <div className="text-center">
                    <label htmlFor="categoria-select" className="mb-2">
                        Buscar por tipo de actividad:
                    </label>
                    <select
                        value={filtroActual}
                        onChange={(e) => setFiltro(e.target.value.toLowerCase())}
                        className="form-select w-auto"
                    >
                        {categoriasUnicas.map((categoria) => (
                            <option key={categoria} value={categoria.toLowerCase()}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <ButtonGroup>
                    {categoriasUnicas.map((categoria) => (
                        <Button
                            key={categoria}
                            className="mx-2"
                            variant={
                                filtroActual.toLowerCase() === categoria.toLowerCase()
                                    ? 'primary'
                                    : 'outline-primary'
                            }
                            onClick={() => setFiltro(categoria.toLowerCase())}
                        >
                            {categoria}
                        </Button>
                    ))}
                </ButtonGroup>
            )}
        </div>
    );
};

export default Filtros;
