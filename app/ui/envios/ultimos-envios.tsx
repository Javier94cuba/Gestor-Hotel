import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Ingresar } from '@/app/lib/definitions';
import Link from 'next/link';
import Search from '../search.jsx';
import Table from '@/app/ui/Envios_Componentes/table'
import  {useSearchParams}  from 'next/navigation.js';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  return (
    <>
    {/* <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Ingreso de productos MercaNeptuno</h1>
            <p className="mt-2 text-sm text-gray-700">
              Lista de todos los ingresos a la tienda Merca neptuno, inlcuye nombre del producto, cantidad.
            </p>
          </div>
          <div className="flex mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <div className='mt-7 mr-4'>
            <Search placeholder={" Buscar Ingreso"}/>
            </div>
            <Link
            key={link.name}
            href={link.href}
            className="block rounded-md mt-7 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Nombre del producto
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Cantidad
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                      Provedor
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Almacenero
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
                  { data.map((value) => (
                    <tr key={ value.id }>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                        { value.name }
                      </td>
                      <td className="text-center px-3 py-4 text-sm text-gray-500">{ value.amount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.proveedor }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.almacenero }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ value.fecha }</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex space-x-2 ">
                        <Btn_editar id={value.id}/>
                        <Btn_eliminar id={value.id}/>
                      </td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div> */}
      <Table query={query}/>
    </>
  );
}
