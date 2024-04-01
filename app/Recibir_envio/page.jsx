import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import {fetchLatestInvoices,fetchIngresar } from '@/app/lib/data';
import LatestEnvios from '../ui/envios/ultimos-envios';

export default async function Recibir_envio() {


  const data = await fetchIngresar();
  
  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Recibir envio"/>
    </div>
    <LatestEnvios data={data}/>
    </>
  )
}
