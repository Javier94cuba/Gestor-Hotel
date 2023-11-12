import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import image from '@/src/assets/Boutique.png'
import Image from 'next/image'

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center justify-center text-white`}>
      <p className="text-5xl"> Gestor</p>
    </div>
  );
}
