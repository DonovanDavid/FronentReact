// ModalFormulario.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Archivo JavaScript de Bootstrap


const ModalFormulario = () => {
  const [opcion, setOpcion] = useState('');
  const [idForm, setIdForm] = useState(0);
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nit, setNit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (opcion === 'crear') {
      fetch('http://localhost:3000/api/provedor/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ciudad,
          direccion,
          nombre,
          telefono,
          nit
        })
      })
        .then(response => response.json())
        .then(data => {
          // Lógica para manejar la respuesta después de crear un proveedor
          console.log('Proveedor creado:', data);
        })
        .catch(error => console.error('Error al crear el proveedor:', error));
    }

    if (opcion === 'editar') {
      fetch(`http://localhost:3000/api/provedor/${idForm}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ciudad,
          direccion,
          nombre,
          telefono,
          nit
        })
      })
        .then(response => response.json())
        .then(data => {
          // Lógica para manejar la respuesta después de editar un proveedor
          console.log('Proveedor editado:', data);
        })
        .catch(error => console.error('Error al editar el proveedor:', error));
    }

    // Cerrar el modal después de enviar los datos
    const modalElement = document.getElementById('modalEditar');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  };

  return (
    <div className="modal fade" id="modalEditar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="ciudad" className="col-form-label">Ciudad:</label>
                <input type="text" className="form-control" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="col-form-label">Direccion</label>
                <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="nombre" className="col-form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="col-form-label">Telefono:</label>
                <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="nit" className="col-form-label">Nit:</label>
                <input type="text" className="form-control" id="nit" value={nit} onChange={(e) => setNit(e.target.value)} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormulario;


