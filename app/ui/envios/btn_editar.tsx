import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
// ...
 
export default function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/Recibir_envio/${id}/edit`}
      className="block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <p>Editar</p>
    </Link>
  );
}
