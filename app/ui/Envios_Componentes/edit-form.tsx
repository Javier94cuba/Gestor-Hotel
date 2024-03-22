'use client';

import { CustomerField, InvoiceForm, Ingresar } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateEnvio } from '@/app/lib/actions';

export default function EditIngresoForm({
  ingreso,
}: {
  ingreso: Ingresar;
}) {

  const updateIngresoId = updateEnvio.bind(null, ingreso.id);

  return (
    <form action={updateIngresoId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* INombre del producto*/}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
           Editar :  Nombre del producto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Nombre del producto"
                defaultValue={ingreso.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

         {/* Cantidad de productos */}
         <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Editar : Cantidad de productos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                defaultValue={ingreso.amount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Proveedor */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Editar : Proveedor del producto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="proveedor"
                name="proveedor"
                type="string"
                placeholder="Proveedor del producto que se adiciona a la tienda"
                defaultValue={ingreso.proveedor}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        {/* Almacenero edit */}
        <div className="mb-4">
          <label htmlFor="almacenero" className="mb-2 block text-sm font-medium">
          Editar : Almacenero
          </label>
          <div className="mb-4">
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="almacenero"
                name="almacenero"
                type="string"
                placeholder="Editar Almacenero"
                defaultValue={ingreso.almacenero}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Editar : Fecha
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fecha"
                name="fecha"
                type="string"
                placeholder="Fecha de entrada ej: 12/06/2024"
                defaultValue={ingreso.fecha}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/Recibir_envio"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Ingreso</Button>
      </div>
    </form>
  );
}
