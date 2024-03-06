import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import LatestInvoices from '../ui/dashboard/latest-invoices'
import {fetchLatestInvoices } from '@/app/lib/data';

export default async function Recibir_envio() {

  const latestInvoices = await fetchLatestInvoices();

  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Recibir envio"/>
    </div>
    <LatestInvoices latestInvoices={latestInvoices}/>
    </>
  )
}
