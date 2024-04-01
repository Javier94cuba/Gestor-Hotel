'use client';
import { useSearchParams, usePathname , useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Search( { placeholder } ) {

  const parametrosurl = useSearchParams()
  const pathname = usePathname() //Esto es la url actual
  const {replace} = useRouter() //Para poder remplazar la url para la busqueda

   const busqueda = (term ) => {
    const params = new URLSearchParams(parametrosurl)
    if (term) {
      params.set('query', term)
    }
    else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
   }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
      onChange={(event) => busqueda(event.target.value)}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={parametrosurl.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
