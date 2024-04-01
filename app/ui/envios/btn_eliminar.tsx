import { Button } from '../button';
import { deleteIngreso } from '@/app/lib/actions';
 
export default function DeleteIngreso({ id }: { id: string }) {
  
  const deleteingresoID = deleteIngreso.bind( null, id);

  return (
    <form action={deleteingresoID}>
    <Button
      className="block rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <p>Eliminar</p>
    </Button>
    </form>
  );
}