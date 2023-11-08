import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Tienda Virtual', href: '/Tienda', icon: HomeIcon },
  { name: 'Carrito de compras', href: '/Carrito', icon: UserGroupIcon },
  { name: 'Ofertas y combos', href: '/Ofertas', icon: UserGroupIcon },
  { name: 'Envios a domicilio', href: '/Envios', icon: UserGroupIcon },
  { name: 'Nuevos artículos', href: '/Articulos', icon: UserGroupIcon },
  {name: 'Preguntas frecuentes',href: '/Preguntas',icon: DocumentDuplicateIcon,},
  { name: 'Soporte', href: '/Soporte', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
