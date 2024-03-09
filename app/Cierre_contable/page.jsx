'use client'
import { use, useState } from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import { number } from 'zod'
import { Fragment } from 'react'

const locations = [
  {
    name: 'Desglose de billetes',
    people: [
      { name: 1000, title: 43, email: 43000, role: '' },
      { name: 500, title: 23, email: 23456, role: '' },
      { name: 200, title: 156, email: 123465, role: '' },
      { name: 100, title: 19, email: 4123, role: '' },
      { name: 50, title: 23, email: 12334, role: '' },
      { name: 20, title: 48, email: 12345, role: '' },
      { name: 10, title: 59, email: 123465, role: '' },
      { name: 5, title: 111, email: 12356, role: '' },
      { name: "Total de efectivo en caja", title: "1239", email: 1000000, role: '' },
    ],
  },
  {
    name: 'Transferencias',
    people: [
      { name: 'Transfermovil CUP', title: '2', email: '23045', role: '' },
      { name: 'Transfermovil MLC', title: '3', email: '183.75', role: '' },
      { name: 'USD', title: '1', email: '50', role: '' },
      { name: 'EUR', title: '1', email: '25', role: '' },
      { name: 'Total por transferencia', title: '', email: '123456', role: '' },
    ],
  },
  {
    name: 'Cierre de caja',
    people: [
      { name: '?', title: '?', email: '?', role: '?' },
    ],
  },
  {
    name: 'Gastos del dia',
    people: [
      { name: 'Hupman sin filtro', title: '50 unidades', email: '180  Mn', role: 'Lia' },
      { name: 'Jabon nacar', title: '150 unidades', email: '180 Mn', role: 'Lia' },
      { name: 'Total de gastos del dia', title: '', email: '360 Mn', role: 'Lia' },
    ],
  },
  {
    name: 'Venta total',
    people: [
      { name: 'Valor de la Venta Total', title: '', email: '256780', role: 'Lia' },
    ],
  },
  {
    name: 'Pago a trabajadores',
    people: [
      { name: 'Lia', title: '1.5%', email: '3561', role: '' },
      { name: 'Cesar', title: '1.5%', email: '3561', role: '' },
      { name: 'Yulai', title: '3.5%', email: '5600', role: '' },
      { name: 'Alejandro', title: '4.5%', email: '8900', role: '' },
    ],
  },
  {
    name: 'Entregar a Richard vt*0.80 - gastos del dia',
    people: [
      { name: 'Richard', title: 'Concepto de inversión', email: '20000', role: '' },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Cierre_contable() {

  // const [miles ,setMiles] = useState();
  // const [qui,setqui]=useState();
  // const [dos,setdos]=useState();
  // const [cientos ,setCientos] = useState();
  // const [cin,setCin]=useState();
  // const [ven,setVen]=useState();
  // const [die,setDie]=useState();
  // const [Sin,setSin]=useState();
  // const [cup,setCup]=useState();
  // const [valorcup,Setvalorcup]= useState();
  // const [c,setC]=useState();
  // const [eur,setEur]=useState();
  // const [valoreur,Setvaloreur]= useState();
  // const [mlc,setMlc]=useState();
  // const [valormlc,Setvalormlc]= useState();
  // const [nombre,setNombre]=useState("");
  // const [cant,setcant]=useState("");
  // const [precio,setPrecio]=useState("");
  // const [gastos, setGastos] = useState([]);

  // let nextID=1;


  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Cierre de Caja"/>
    </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Cierre Contable</h1>
          <p className="mt-2 text-sm text-gray-700">
            Cierre economico del dia
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Exportar PDF
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Proceso economico
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Valor
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Total
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Porciento
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {locations.map((location) => (
                  <Fragment key={location.name}>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {location.name}
                      </th>
                    </tr>
                    {location.people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {person.name}</span>
                          </a> */}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    {/* <div className='text-xl'>
      <h1 className='text-blue-400 text-2xl mt-10 mb-2'>Desglose :</h1>
      <form action="">
  <label className='flex '>
    <p>1000 X <input type="number" name="miles" value={miles} onChange={event => {setMiles (event.target.value);}} className='w-14 h-6 ml-0.5' /> = {miles*1000} </p>
  </label>
  <label className='flex '>
  <p>500 X <input type="number" name="miles" value={qui} onChange={event => {setqui (event.target.value);}} className='w-14 h-6 ml-3' /> = {qui*500} </p>
  </label>
  <label className='flex '>
  <p>200  X <input type="number" name="miles" value={dos} onChange={event => {setdos (event.target.value);}} className='w-14 h-6 ml-3' /> = {dos*200} </p>
  </label>
  <label className='flex '>
  <p>100  X <input type="number" name="miles" value={cientos} onChange={event => {setCientos (event.target.value);}} className='w-14 h-6 ml-3' /> = {cientos*100} </p>
  </label>
  <label className='flex '>
  <p>50  X <input type="number" name="miles" value={cin} onChange={event => {setCin (event.target.value);}} className='w-14 h-6 ml-6' /> = {cin*50} </p>
  </label>
  <label className='flex '>
  <p>20  X <input type="number" name="miles" value={ven} onChange={event => {setVen (event.target.value);}} className='w-14 h-6 ml-6' /> = {ven*20} </p>
  </label>
  <label className='flex '>
  <p>10  X <input type="number" name="miles" value={die} onChange={event => {setDie (event.target.value);}} className='w-14 h-6 ml-6' /> = {die*10} </p>
  </label>
  <label className='flex '>
  <p>5  X <input type="number" name="miles" value={Sin} onChange={event => {setSin (event.target.value);}} className='w-14 h-6 ml-8' /> = {Sin*5} </p>
  </label>
      </form>
      <h1 className='text-2xl mt-2'>Valor total del desglose es : {(miles*1000)+ (qui*500)+(dos*200)+(cientos*100)+ (cin*50)+(ven*20)+(die*10)+(Sin*5)} </h1>
      <h1 className='text-blue-400 text-2xl mt-10'>Transferencias :</h1>
      <form action="">
      <label className='flex '>
      <p>Cup - <input type="number" placeholder='cantidad' name="cantidad" value={c} onChange={event => {setC (event.target.value);}} className='w-24 h-6 ml-2' /> 
       = {c} </p>
      </label>
      <label className='flex '>
      <p>USD<input type="number" placeholder='valor' name="valor" value={valorcup} onChange={event => {Setvalorcup (event.target.value);}} className='w-16 h-6 ml-2' /> X
      <input type="number" placeholder='cantidad' name="cantidad" value={cup} onChange={event => {setCup (event.target.value);}} className='w-24 h-6 ml-2' /> 
       = {valorcup*cup} </p>
      </label>
      <label className='flex '>
      <p>MLC<input type="number" placeholder='valor' name="valor" value={valormlc} onChange={event => {Setvalormlc (event.target.value);}} className='w-16 h-6 ml-2' /> X
      <input type="number" placeholder='cantidad' name="cantidad" value={mlc} onChange={event => {setMlc (event.target.value);}} className='w-24 h-6 ml-2' /> 
       = {valormlc*mlc} </p>
      </label>
      <label className='flex '>
      <p>EUR<input type="number" placeholder='valor' name="valor" value={valoreur} onChange={event => {Setvaloreur (event.target.value);}} className='w-16 h-6 ml-2' /> X
      <input type="number" placeholder='cantidad' name="cantidad" value={eur} onChange={event => {setEur (event.target.value);}} className='w-24 h-6 ml-2' /> 
       = {valoreur*eur} </p>
      </label>
      <h1 className='mt-2'>El total ingresado por cuestion de transferencias es : {(c*1) + (valorcup*cup) + (valoreur*eur) + (valormlc*mlc)}</h1>
      </form>

      <h1 className='text-blue-400 text-2xl mt-10'>Gastos del dia :</h1>
      <div className='mr-2'>
      <h1>Ingresar producto referente al gasto:</h1>
      <p className='mr-2'>
        Nombre : 
        <input
        className='ml-3 mb-3'
        placeholder='nombre'
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      </p>
      <p className='mr-2'>
        Cantidad : 
        <input
        className='ml-2 mb-3'
        placeholder='cantidad'
        value={cant}
        onChange={e => setcant(e.target.value)}
      />
      </p>
      <p className=''>
        Precio : 
        <input
        className='ml-8'
        placeholder='precio'
        value={precio}
        onChange={e => setPrecio(e.target.value)}
      />
      </p>
      <button className='bg-blue-200 p-4 rounded-lg mt-4' onClick={() => {
        gastos.push({
          id: nextID++,
          nombre: nombre,
          cant:cant,
          precio:precio,
        });
      }}>
        Añadir
      </button>
      <ul>
        {gastos.map( gasto => (
          <>
          <li key={gasto.id}> {gasto.id} {gasto.nombre} {gasto.cant} {gasto.precio} </li>
          <p className='mt-2'>Total de gasto del día en concepto de inversión : {cant*precio}</p>
          </>

        ))}
      </ul>
        </div>
      
      <h1 className='text-2xl mt-10'>La venta total del día es : 
      {(c*1) + (valorcup*cup) + (valoreur*eur) + (valormlc*mlc)+(miles*1000)+ (qui*500)+(dos*200)+(cientos*100)+ (cin*50)+(ven*20)+(die*10)+(Sin*5)+(cant*precio)}
      </h1>
      <h1>
        El valor por concepto de salario por trabajador :  
        {((c*1) + (valorcup*cup) + (valoreur*eur) + (valormlc*mlc)+(miles*1000)+ (qui*500)+(dos*200)+(cientos*100)+ (cin*50)+(ven*20)+(die*10)+(Sin*5)) * 0.03 / 2}
      </h1>
      <h1>
        El 3% del total :  
        {((c*1) + (valorcup*cup) + (valoreur*eur) + (valormlc*mlc)+(miles*1000)+ (qui*500)+(dos*200)+(cientos*100)+ (cin*50)+(ven*20)+(die*10)+(Sin*5)) * 0.03}
      </h1> */}
    {/* </div> */}
    </>
  )
}

export default Cierre_contable