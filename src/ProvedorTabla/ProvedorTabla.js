// ProvedorTabla.js

import React, { useState, useEffect } from 'react';
import './ProvedorTabla.css'; // Archivo para estilos

const ProvedorTabla = () => {
  const [provedores, setProvedores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/provedor/')
      .then(response => response.json())
      .then(data => setProvedores(data))
      .catch(error => console.log(error));
  }, []);

  // Resto de tu lógica para mostrar y manipular la tabla va aquí
    // Función para renderizar los datos en la tabla
    const renderizarDatos = () => {
      return provedores.map(provedor => (
        <tr key={provedor.id}>
          <td>{provedor.id}</td>
          <td>{provedor.ciudad}</td>
          <td>{provedor.direccion}</td>
          <td>{provedor.nombre}</td>
          <td>{provedor.telefono}</td>
          <td>{provedor.nit}</td>
          <td className="text-center">
            <a className="btnEditar btn btn-primary">Editar</a>
            <a className="btnBorrar btn btn-danger">Borrar</a>
          </td>
        </tr>
      ));
    };

  return (
    <div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
      <button id="btnCrear" type="button" className="btn btn-primary" data-bs-toggle="modal">Crear</button>
      <table id="tabla" className="table mt-2 table-bordered table-striped">
        <thead>
          <tr className="text-center">
            {/* th deben tener el nombre de las columnas de los parámetros */}
            <th scope="col">ID</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Nit</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Lógica para mostrar los datos en la tabla */}
          {renderizarDatos()}
        </tbody>
      </table>
    </div>
  );
};

export default ProvedorTabla;

