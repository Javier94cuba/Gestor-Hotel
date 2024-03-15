import React from 'react'
import Breadcrumbs from '../ui/componentstailwind/breadcumb'
import Menu_venta from '../ui/Menus_pagina/menu_venta'

const people = [
  { name: 'Pepsi Cola, Harina', title: '3 , 1 ', email: "1560", role: 'Lia', id : 1, metodo:"efectivo", fecha:"12/05/2024" },
  { name: 'Sprite', title: '2', email: "350", role: 'Lia', id : 2, metodo:"transfermovil" , fecha:"12/05/2024" },
  // More people...
]

function Venta() {
  return (
    <>
    <div className='text-2xl'>
      <Breadcrumbs name="Venta de productos"/>
    </div>
    {/* <div className=''>
    <Menu_venta/>
    </div> */}
    <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Realizar venta</h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex space-x-2">
            <button
              type="button"
              className="block rounded-md mt-7 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Nueva Venta
            </button>
            <button
              type="button"
              className="block rounded-md mt-7 bg-red-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cerrar caja
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Ventas
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Productos vendidos
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Unidades
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Precio total
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                    Método de pago
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Dependiente
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Fecha
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <button className="sr-only">Edit</button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  { people.map((person) => (
                    <tr key={ person.email }>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                        { person.id }
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                        { person.name }
                      </td>
                      <td className="text-center px-3 py-4 text-sm text-gray-500">{ person.title }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ person.email }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ person.metodo }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ person.role }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ person.fecha }</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex space-x-2 ">
                        <button
                          type="button"
                          className="block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="block rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Venta