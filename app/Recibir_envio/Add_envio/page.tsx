import React from 'react'
import Form from '@/app/ui/Envios_Componentes/create-form';
import Breadcrumbs from '@/app/ui/Envios_Componentes/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function ADD_envio() {
  // const customers = await fetchCustomers();

  return (
    <>
    <Breadcrumbs
        breadcrumbs={[
          { label: 'Recibir envio', href: 'http://localhost:3000/Recibir_envio' },
          {
            label: 'Nuevo envío',
            href: 'http://localhost:3000/Recibir_envio/Add_envio',
            active: true,
          },
        ]}
      />
      <Form  />   
    </>
  )
}