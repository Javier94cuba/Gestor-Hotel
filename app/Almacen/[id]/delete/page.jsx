import Form from '@/app/ui/Envios_Componentes/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchIngresobyId } from '@/app/lib/data';
 
export default async function Page({params}) {
  const id = params.id;
  const ingreso = await (fetchIngresobyId(id));
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Almacen', href: '/Almacen' },
          {
            label: 'Editar producto',
            href: `Almacen/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form ingreso={ingreso} />
    </main>
  );
}