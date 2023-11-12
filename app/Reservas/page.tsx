import React from 'react'
import Product from '../ui/product/products'
import Breadcrumbs from '../ui/componentstailwind/breadcumb'

function Reservas() {
  return (
    <>
    <div className='mb-3 text-2xl'>
      <Breadcrumbs name="Reservas"/>
    </div>
    <Product/>
    </>
  )
}

export default Reservas