import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import image from '@/src/assets/Boutique.png'
import Image from 'next/image'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className}items-center justify-center text-white mt-2`}>
      <p className="text-center text-lg mb-1">Software 1.0</p>
    </div>
  );
}
