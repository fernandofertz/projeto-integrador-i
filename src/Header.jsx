import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#B0E0E6',
        padding: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '8px',
      }}
    >
      <Link
        to="/"
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '20px',
          textDecoration: 'none',
        }}
      >
        <h1 style={{fontSize: '23px'}}>Gerenciador de Não Conformidades</h1>
      </Link>
      <Link
        to="/nc/cadastrar"
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '20px',
          textDecoration: 'none',
          marginRight: '60px'
        }}
      >
        <h1 style={{fontSize: '23px'}}>Cadastrar Não Conformidade</h1>
      </Link>
    </div>
  );
};

export default Header;
