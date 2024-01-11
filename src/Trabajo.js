// Trabajo.js
import React from 'react';

const Trabajo = ({ trabajo }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`trabajo ${hovered ? 'hovered' : ''} worksContainer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{trabajo.titulo}</p>
      {hovered && (
        <div className="trabajo-details">
          <img src={trabajo.imagen} alt={`Imagen de ${trabajo.titulo}`} />
          <p>{trabajo.texto}</p>
        </div>
      )}
    </div>
  );
};

export default Trabajo;
