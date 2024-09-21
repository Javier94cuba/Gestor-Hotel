import { FetchFilteredIngresos } from '@/app/lib/data';
import Btn_editar_almacen from '@/app/ui/envios/btn_editar_almacen'
import Btn_eliminar from '@/app/ui/envios/btn_eliminar'
import Btn_descargar from '@/app/ui/envios/btn_descargar'
import Link from 'next/link';
import Search from '../search.jsx';

const link = {name:"Ingreso", href : "/Recibir_envio/Add_envio"}

export default async function IngresosTable({
  query,
  } :  {
  query: string;
  }) 
  {
  const ingresos = await FetchFilteredIngresos(query);
  
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Ingreso de productos MercaNeptuno</h1>
            <p className="mt-2 text-sm text-gray-700 pt-1">
              Lista de todos los ingresos a la tienda, actualizar por producto Precio de costo, Precio de venta, Ipv, Merma.</p>
          </div>
          <div className="flex mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <div className='mt-7 mr-4'>
            <Search placeholder={"Productos"}/>
            </div>
            <Link
            key={link.name}
            href={link.href}
            className="flex space-x-1 rounded-md mt-7 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <p className="hidden md:block">{link.name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </Link>
            <Btn_descargar/>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    {/* <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Id de base de datos (Ojo)
                    </th> */}
                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Nombre del producto
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Cantidad
                    </th>
                    {/* <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                      Provedor
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Almacenero
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Fecha
                    </th> */}
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   IPV
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Precio de costo
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Precio de Venta
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Inversion total
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Merma
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <button className="sr-only">Edit</button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  { ingresos.map((value) => (
                    <tr key={ value.id }>
                      {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                        {value.id}
                      </td> */}
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                        { value.name }
                      </td>
                      <td className="text-center px-3 py-4 text-sm text-gray-500">{ value.amount}</td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.proveedor }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.almacenero }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.fecha }</td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"></td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex space-x-2 ">
                        <Btn_editar_almacen id={value.id}/> 
                        <Btn_eliminar  id={value.id}/>
                      </td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
