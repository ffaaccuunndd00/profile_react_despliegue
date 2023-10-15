import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            &copy; {new Date().getFullYear()} Este es un sitio web de prueba para la actividad 7 del Curso IDF.
        </footer>
    );
}

export default Footer;