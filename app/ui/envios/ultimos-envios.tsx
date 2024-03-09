import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Ingresar } from '@/app/lib/definitions';

const people = [
  { name: 'Pepsi Cola', title: '200 unidades', email: 'Vima', role: 'Alejandro', id : 1 },
  { name: 'Sprite', title: '50 unidades', email: 'Vima', role: 'Yulai', id : 2 },
  { name: 'Pepsi Pomo', title: '150 unidades', email: 'Vima', role: 'Yulai', id : 3 },
  { name: 'Sprite Pomo', title: '250 unidades', email: 'Vima', role: 'Cesar', id : 4 },
  // More people...
]

export default async function Ultimosingresos({
  data,
}:{
  data: Ingresar[];
})
{
  return (
    <>
    <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Ingreso de productos MercaNeptuno</h1>
            <p className="mt-2 text-sm text-gray-700">
              Lista de todos los ingresos a la tienda Merca neptuno, inlcuye nombre del producto, cantidad.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md mt-7 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Añadir envío
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
                      #
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0 text-center">
                      Nombre del producto
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Cantidad
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                      Provedor
                    </th>
                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900 text-center">
                   Almacenero
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{ person.role }</td>
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

      {/* <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <div className="flex mt-4 flex-col justify-between rounded-xl bg-gray-300 p-4">
      <div className="bg-white px-6">
          {data.map((i) => {
            return (
              <div
                key={i.id}>
                <div className="flex mb-4">
                  <div className="min-w-10">
                    <p className="flex ml-10 mt-4">
                      {i.name}
                     <p className='ml-2'>{i.amount}</p>                    
                     </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado justo ahora</h3>
        </div>
      </div>
    </div> */}
    </>
  );
}
