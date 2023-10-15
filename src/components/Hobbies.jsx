import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Deportes',
            descripcion: 'Jugar al básquet, al fútbol o al pádel. También ir a crossfit o al gimnasio.',
        },
        {
            id: 2,
            nombre: 'Creación de contenido',
            descripcion: 'Soy un apasionado de encontrar detalles en situaciones comunes y hacer un contenido diferencial a partir de eso.',
        },
        {
            id: 3,
            nombre: 'Cine',
            descripcion: 'Puedo pasar horas y horas mirando películas clásicas.',
        },
        {
            id: 4,
            nombre: 'Plantas de interior',
            descripcion: 'Cuidar, cuidar y cuidar mis plantas de interior.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;