import React, { useState } from 'react';
import GenericDataTable from "../../../Components/Tablas/Tabla_Base";
import FormUpdate from '../../../Components/Modals/Form_Update_Proveedor';
import Form_Proveedor from '../../../Components/Modals/Form_Proveedor';
import DeleteUser from '../../../Components/Modals/Delete';
import axios from 'axios';

const apiUrlSearch = `${process.env.NEXT_PUBLIC_BACKEND_URL}Proveedores/all`;


const headerMappings = {
  clave: "Clave",
  tipo: "Tipo",
  iD_Solomon: "ID Solomon",
  razon_Social: "Razón Social",
  calle_Numero: "Calle",
  colonia: "Colonia",
  cp: "CP",
  poblacion: "Población",
  estado: "Estado",
  rfc: "RFC",
  clasificacion: "Clasificación",
  telefono: "Teléfonos",
  fecha_Alta: "Fecha Alta",
  ant_Compras: "Atn. Compras",
  limite_Credito: "Límite Crédito",
  ant_Pagos: "Atn. Pagos",
  dias_Credito: "Días Crédito",
  reqquisitos_Pronto_Pago: "Requisitos Pronto Pago",
  descuento: "Descuento",
  ultima_Compra: "Última Compra",
  ref_Bancaria: "Ref. Bancaria",
  observaciones: "Observaciones"
};

export default function View_Proveedores() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState<string | number | null>(null);

  const openEditModal = () => {
    setEditModalOpen(true);
  }

  const closeEditModal = () => {
    setEditModalOpen(false);
  }

  const openAddModal = () => {
    setAddModalOpen(true);
  }

  const closeAddModal = () => {
    setAddModalOpen(false);
  }

  
  const handleDelete = (id: number | string) => {
    setSelectedProviderId(id); 
    setIsConfirmModalOpen(true);
  }

  
  const handleDeleteConfirmado = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}Proveedores/delete/${selectedProviderId}`);
      setIsConfirmModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar proveedor:", error);
    }
  };

  return (
    <>

      <div className="container mx-auto py-10">
        <GenericDataTable
          title="Proveedores" 
          headerMappings={headerMappings} 
          onDelete={handleDelete}
          apiUrlSearch={apiUrlSearch}
          textAdd='Agregar Proveedor'
          textEdit='Editar Proveedor'
          onAdd={openAddModal}
          onEdit={openEditModal}
        />
      </div>
      {isEditModalOpen && <FormUpdate onClose={closeEditModal} />}
      {isAddModalOpen && <Form_Proveedor onClose={closeAddModal} />}
      {isConfirmModalOpen && 
        <DeleteUser 
          text='¿Estás seguro de que deseas eliminar al proveedor'
          title='Eliminar proveedor'
          onConfirm={handleDeleteConfirmado} 
          userName={`${selectedProviderId}?`} 
          open={isConfirmModalOpen} 
          setOpen={setIsConfirmModalOpen} 
        />
      }
    </>
  );
}
