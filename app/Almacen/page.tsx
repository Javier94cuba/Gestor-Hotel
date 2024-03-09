import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import Menu_almacen from '../ui/Menus_pagina/menu_almacen'

const transactions = [
  {
    id: 'Arroz',
    company: 200,
    share: "100 ",
    commission: '5',
    price: 'granos',
    quantity: '',
    netAmount: '',
  },
  {
    id: 'Pepsi',
    company: 185,
    share: "100 ",
    commission: '5',
    price: 'granos',
    quantity: '',
    netAmount: '',
  },
  {
    id: 'Bateria',
    company: 20000,
    share: "4",
    commission: '5',
    price: 'granos',
    quantity: '',
    netAmount: '',
  },
  // More transactions...
]

function Almacen() {
  return (
    <>
     <div className='mb-6 text-2xl'>
      <Breadcumb name="Almacen"/>
    </div>
    {/* <div className='mb-8'>
      <Menu_almacen/>
    </div> */}

    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Total de productos en el almacen</h1>
          <p className="mt-2 text-sm text-gray-700">
            Visualizar productos existentes en el almacen
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Exportar como pdf
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Merma
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Categoría
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ?
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ?
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{transaction.id}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {transaction.company}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.share}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.commission}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.price}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.quantity}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.netAmount}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 text-sm font-medium sm:pr-0 flex space-x-2 ">
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Almacen