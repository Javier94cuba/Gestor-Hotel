import { LockClosedIcon,PresentationChartLineIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import Sideright from './ui/componentstailwind/side_right';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-xl md:leading-normal`}>
            <strong className='flex mb-4'>Gestión de Pymes</strong> Sitio web para la <strong className='text-blue-600'>Gestión económica</strong>
            , el sitio se encuentra en desarrollo whatsapp de actualizaciones +53 58386901.
          </p>
          <Link
            href="https://gestor-hotel-1uc207z1j-javier94cuba.vercel.app/Recibir_envio"
            className="flex items-center gap-3 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Gestión de la tienda </span> <PresentationChartLineIcon className="w-5 md:w-6" />
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
