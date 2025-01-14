import React from "react";
import "./InfoFooter.css";

function InfoFooter() {
    return (
        <div className="info-footer d-flex flex-column">
            <h6>Su negocio o evento quiere ser visualizado</h6>
            <h2>Contáctenos</h2>
            <a
                href="https://www.pampacode.com"
                target={"_blank"}
                rel="noreferrer"
                aria-labelledby="Web Pampa Code"
                className="text-white small"
            >
                unplanenjunin@gmail.com
            </a>
        </div>
    );
}

export default InfoFooter;
