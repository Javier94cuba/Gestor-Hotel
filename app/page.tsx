import { LockClosedIcon,BuildingOffice2Icon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import Sideright from './ui/componentstailwind/side_right';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
       <header className="flex w-full shadow-xl bg-white  text-slate-600">
    <div className="w-1/2 font-bold text-center p-8 text-2xl cursor-pointer">Gestor</div>
    <div className="w-full text-center">
        <ul className="flex space-x-10  p-8 place-content-center text-lg ml-20">
            <li className="">
                <img className="w-8 hover:animate-bounce animate-once dark:bg-white dark:rounded-full"/>
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
                Inicio
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#about_me">Sobre el proyecto</a> 
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
                <a href="#proyects">Precios</a>
            </li>
            <li className="cursor-pointer hover:animate-jump animate-once hover:text-blue-500">
            <a href="#contact">Soporte</a>
            </li>
        </ul>
    </div>
    <div className=" shadow-slate-500/50">
    </div>
    </header>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-xl md:leading-normal`}>
            <strong className='flex mb-4'>Gestion Hotelera</strong> Sitio web para la <strong className='text-blue-600'>Gestion de Hoteles</strong>
            , el sitio se encuentra en desarrollo constante.
          </p>
          <Link
            href="http://localhost:3000/Reservas"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Gestion Hotelera</span> <BuildingOffice2Icon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Administrar</span> <LockClosedIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-auto md:px-2 md:py-4">
         <Sideright/>
        </div>
      </div>
    </main>
  );
}
