import React from 'react'
import Breadcumb from '../ui/componentstailwind/breadcumb'
import Menu_almacen from '../ui/Menus_pagina/menu_almacen'
function Almacen() {
  return (
    <>
     <div className='mb-3 text-2xl'>
      <Breadcumb name="Almacen"/>
    </div>
    <div className='mb-8'>
      <Menu_almacen/>
    </div>
    </>
  )
}

export default Almacen