import React from 'react'
import Form from '@/app/ui/Envios_Componentes/create-form';
import Breadcrumbs from '@/app/ui/Envios_Componentes/breadcrumbs';

export default async function ADD_envio() {
  return (
    <>
    <Breadcrumbs
        breadcrumbs={[
          { label: 'Almacen', href: 'http://localhost:3000/Almacen' },
          {
            label: 'Producto del almacen',
            href: 'http://localhost:3000/Almacen/Add_envio',
            active: true,
          },
        ]}
      />
      <Form />   
    </>
  )
}