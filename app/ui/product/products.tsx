
export default function Product() {
  return (
    <div className="md:flex space-x-4">
    <div className="md:flex items-center justify-center flex-col space-y-1 bg-white w-56 p-4 mt-10">
       <p className="font-semibold">Imagen</p>
       <p className="">pintura azul 110ml</p>
       <p>Uñas </p>
       <p>Color rosado</p>
       <p>210.00 MN</p>
       <p className="border-spacing-3 border border-cyan-950 p-2"> + ver </p>
    </div>
     <div className="md:flex items-center justify-center flex-col space-y-1 bg-white w-56 p-4 mt-10">
     <p>Imagen</p>
     <p>pintura azul 110ml</p>
     <p>Uñas </p>
     <p>Color rosado</p>
     <p>210.00 MN</p>
     <p className="border-spacing-3 border border-cyan-950 p-2"> + ver </p>
  </div>
  </div>
      
  )
}