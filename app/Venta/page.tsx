import React from 'react'
import Product from '../ui/product/products'
import Breadcrumbs from '../ui/componentstailwind/breadcumb'
import Menu_venta from '../ui/Menus_pagina/menu_venta'

function Venta() {
  return (
    <>
    <div className='mb-5 text-2xl'>
      <Breadcrumbs name="Venta de productos"/>
    </div>
    <div className='mb-8'>
    <Menu_venta/>
    </div>
    <Product/>
    </>
  )
}

export default Venta