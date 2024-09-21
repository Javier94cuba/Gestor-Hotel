import Table from '@/app/ui/Envios_Componentes/table'


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
