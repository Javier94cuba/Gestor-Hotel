import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'

const people = [
  { name: 'Pepsi Cola', title: '200 unidades', email: 'Refrescos', role: 'Lia', id : 1 },
  { name: 'Sprite', title: '50 unidades', email: 'Refrescos', role: 'Lia', id : 2 },
  // More people...
]

function Soporte() {
  return (
    <>
      <div className='mb-3 text-2xl'>
        <Breadcumb name="Soporte" />
      </div>
    </>
  )
}



export default Soporte