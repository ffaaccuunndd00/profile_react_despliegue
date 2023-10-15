import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Facundo Rodrigo',
        edad: 26,
        profesion: 'Comunicador social',
        descripcion: 'Soy una persona que se caracteriza por estar haciendo algo todo el tiempo. Me apasiona aprender nuevas cosas, redactar y, sobre todas las cosas, divertirme. El humor y la diversión son dos de los pilares más importantes en mi día a día.',
    };

    return (
        <div className="container">
            <h2>Acerca de Mí</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad} años</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;