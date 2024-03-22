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
          { label: 'Envios', href: '/Recibir_envio' },
          {
            label: 'Editar envio',
            href: `Recibir_envio/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form ingreso={ingreso} />
    </main>
  );
}