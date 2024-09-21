import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Ingresar } from '@/app/lib/definitions';
import Link from 'next/link';
import Search from '../search.jsx';
import Table from '@/app/ui/Envios_Componentes/table'
import  {useSearchParams}  from 'next/navigation.js';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  return (
    <>
      <Table query={query}/>
    </>
  );
}
