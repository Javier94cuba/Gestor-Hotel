import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import {fetchLatestInvoices,fetchIngresar,FetchFilteredIngresos } from '@/app/lib/data';
import LatestEnvios from '../ui/envios/ultimos-envios_almacen';

export default async function Almacen({searchParams}){

  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Almacen"/>
    </div>
    <LatestEnvios searchParams={searchParams}/>
    </>
  )
}
