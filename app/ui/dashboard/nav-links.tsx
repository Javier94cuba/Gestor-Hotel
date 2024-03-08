'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Venta', href: '/Venta', icon: ShoppingCartIcon },
  { name: 'Recibir envio', href: '/Recibir_envio', icon: ShoppingBagIcon },
  { name: 'Cierre contable', href: '/Cierre_contable', icon: LockClosedIcon },
  { name: 'Almacen', href: '/Almacen', icon: HomeIcon },
  { name: 'Estado de cuenta', href: '/Estado_de_cuenta', icon: CurrencyDollarIcon },
  {name: 'Guia para la app',href: '/Guia',icon: DocumentDuplicateIcon,},
  { name: 'Soporte', href: '/Soporte', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[60px] w-48 grow items-center justify-center gap-2 
            rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100
             hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 
             ${pathname === link.href ? "bg-slate-400 text-dark rounded-xl" : ""}
             `}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
