import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'

function Guia_app() {
  return (
    <>
    <div className='text-2xl'>
      <Breadcumb name="Guía"/>   
    </div>
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-3xl font-semibold leading-10 text-indigo-600">Guia básica de la App</p>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Esta guia consta de diferentes pasos donde se vera, como trabajar con el menu lateral izquierdo. Cada uno de estos siendo las funcionalidades
                para llevar a cabo la gestion del negocio.
              </p>
              <p className="mt-8">
                
              </p>
            </div>
            <div>
              <p>
                - Pagina de Ventas <br/>
                - Pagina Almacen <br/>
                - Cierre contable <br/>
                - Estado de cuenta <br/>
                - Recibir un envío <br/>
              </p>
              <p className="mt-8">
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Empecemos
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div>
      <p className='ml-8 mt-10'>Esta guia consta de diferentes pasos donde se vera, como trabajar con el menu lateral izquierdo. Cada uno de estos siendo las funcionalidades
                para llevar a cabo la gestion del negocio.
      </p>
      </div>
    </div>
    </>
  )
}

export default Guia_app