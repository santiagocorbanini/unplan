import React from "react";
import logoPampa from "./../../assets/logoPampa.svg";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <a
                href="https://www.pampacode.com"
                target={"_blank"}
                rel="noreferrer"
                aria-labelledby="Web Pampa Code"
                className="text-white small"
            >
                Desarrollado por
                <img
                    src={logoPampa}
                    alt="Pampacode"
                    width={120}
                    aria-labelledby="Logo Pampa Code"
                    id="pampaLogo"
                    className="mx-1"
                />
                {new Date().getFullYear()} ©
            </a>
        </footer>
    );
}

export default Footer;
