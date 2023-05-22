import React from 'react';
import {Routes, BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import TableComponent from './TableComponent';
import CriarNC from './NC/CriarNC';
import EditNcComponent from './NC/EditNcComponent';


const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />
      <Routes>
        <Route path="/nc/cadastrar" element={<CriarNC/>}/>
        <Route exact path="/" element={<TableComponent />} />
        <Route exact path="/nc/editar" element={<EditNcComponent />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;