import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Vuelo MiamiA23',
    role: 'Beatriz',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    reserva: "24-2 / 28-2",
    hora_llegada: "",
    notas: "",
    pasaporte: "",
  },
  // More people...
]

function notes() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-3 bg-white rounded-xl">
          <h4 className="mt-1 mb-4 text-sm font-semibold text-blue-500">Reserva</h4>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Cliente: {person.name}</h3>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Reserva: {person.reserva}</h3>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Telefono: {person.telephone}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm mt-2 text-red-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Editar
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Modificar
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default notes