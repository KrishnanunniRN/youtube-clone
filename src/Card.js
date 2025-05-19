import React from 'react';

function Card({ imageUrl, title, description}) {
    return (
      <div className="card mt-5" style={{ width: '320px', display: 'inline-block', margin: '10px' }}>
        <div className="card-body" style={{ position: 'relative' }}>
          <img src={imageUrl} className="card-img-top" alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;