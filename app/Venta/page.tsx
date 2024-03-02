import React from 'react'
import Product from '../ui/product/products'
import Breadcrumbs from '../ui/componentstailwind/breadcumb'
import Buttons from '../ui/Links_por_pagina/button'

function Venta() {
  return (
    <>
    <div className='mb-5 text-2xl'>
      <Breadcrumbs name="Venta de productos"/>
    </div>
    <div className='mb-8'>
    <Buttons/>
    </div>
    
    <Product/>
    </>
  )
}

export default Venta