// MyWork.js
import React from 'react';
import Trabajo from './Trabajo';
import image1 from './images/infernogrowshop.png';
import image2 from './images/eva.png';
import './MyWork.css'; // Ajusta la ruta según tu estructura de archivos

const MyWork = () => {
  const trabajos = [
    {
      titulo: 'Proyecto 1',
      imagen: image1,
      texto: 'Descripción del Proyecto 1',
    },
    {
      titulo: 'Proyecto 2',
      imagen: image2,
      texto: 'Descripción del Proyecto 2',
    },
    // Agrega más trabajos según sea necesario
  ];

  return (
    <div className="my-work">
      {trabajos.map((trabajo, index) => (
        <Trabajo key={index} trabajo={trabajo} />
      ))}
    </div>
  );
};

export default MyWork;
