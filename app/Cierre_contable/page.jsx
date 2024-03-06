'use client'
import { use, useState } from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import { number } from 'zod'

function Cierre_contable() {

  const [miles ,setMiles] = useState();
  const [qui,setqui]=useState();
  const [dos,setdos]=useState();
  const [cientos ,setCientos] = useState();
  const [cin,setCin]=useState();
  const [ven,setVen]=useState();
  const [die,setDie]=useState();
  const [Sin,setSin]=useState();
  const [cup,setCup]=useState();
  const [valorcup,Setvalorcup]= useState();
  const [c,setC]=useState();
  const [eur,setEur]=useState();
  const [valoreur,Setvaloreur]= useState();
  const [mlc,setMlc]=useState();
  const [valormlc,Setvalormlc]= useState();
  const [nombre,setNombre]=useState("");
  const [cant,setcant]=useState("");
  const [precio,setPrecio]=useState("");
  const [gastos, setGastos] = useState([]);

  let nextID=1;


  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcumb name="Cierre de Caja"/>
    </div>
    <div className='text-xl'>
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
      </h1>
    </div>
    </>
  )
}

export default Cierre_contable