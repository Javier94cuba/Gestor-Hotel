import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
// import LatestInvoices from '../ui/dashboard/latest-invoices'
import {fetchLatestInvoices,fetchIngresar } from '@/app/lib/data';
import LatestEnvios from '../ui/envios/ultimos-envios';
import Table from '../ui/Envios_Componentes/table';

export default async function Recibir_envio() {

  // const latestInvoices = await fetchLatestInvoices();
  const data = await fetchIngresar();
  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Recibir envio"/>
    </div>
    {/* <Table/> */}
    <LatestEnvios data={data}/>
    {/* <LatestInvoices latestInvoices={latestInvoices}/> */}

    </>
  )
}
