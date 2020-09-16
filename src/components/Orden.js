import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

const Orden = ({ orden, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ orden.ordenNumber }</h2>
      <p>{ orden.ordenDetail }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(orden.id)}>
        Remove
      </button>
    </div>
  );
};
export default Orden