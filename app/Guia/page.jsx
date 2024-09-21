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
                - Pagina de Venta <br/>
                - Pagina de IPV <br/>
                - Recibir un envío <br/>
                - Cierre contable <br/>
                - Pagina Almacen <br/>
                - Gestion de contraseñas <br/>
                - Estado de cuenta <br/>
              </p>
              <p className="mt-8">
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <h1 className='text-blue-500 text-xl '>Empecemos</h1>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h1 className='pt-4 '>Venta</h1>
        <div className='pt-2'>
          <p>En esta pagina se generan las ventas introduciendo la informacion relevante</p>
        </div>
        <h1 className='pt-4 '>IPV</h1>
        <div className='pt-2'>
          
        </div>
        <h1 className='pt-4 '>Recibir Envio</h1>
        <div className='pt-2 space-y-2'>
          <p>En la pagina de recibir envio, se adiciona el producto entrante al almacen</p>
          <p>Esto causa que en el almacen se adicione la informacion entrada y a raiz de eso se debe editar los
             campos faltantes para que se actualize el IPV y la pagina de ventas<br/>
          </p>
          <p>En el caso de entrar 2 productos iguales, el almacenero debe editar la cantidad existente total y no eliminar el ingreso para que quede<br/>
          constancia de los ingresos. Vender los productos que tenga * en su nombre y que tenga IPV,Precio de COsto y Precio de venta.</p>
        </div>
        <h1 className='pt-4 '>Cierre contable</h1>
        <div className='pt-2'>
        
        </div>
        <h1 className='pt-4 '>Almacen</h1>
        <div className='pt-2'>
        <p>En la pagina de almacen se gestiona toda la informacion relevante para la venta de los productos, Precio de costo, Precio de venta<br/>
        Precio de costo, Merma, Ipv - este ultimo da a conocer con cuantos productos se empieza la venta del dia
        </p>
        </div>
        <h1 className='pt-4 '>Gestion de contraseñas</h1>
        <div className='pt-2'>
        <p>Se gestiona las contraseñas para acceder al sitio web con los permisos otorgados</p>
        </div>
        <h1 className='pt-4 '>Estado de cuenta</h1>
        <div className='pt-2'>
        
        </div>
        <h1 className='pt-4 '>Guia para la app</h1>
        <div className='pt-2'>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Guia_app