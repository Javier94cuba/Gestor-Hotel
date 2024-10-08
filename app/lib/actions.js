//Mutar los datos del proyecto
'use server'
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {z} from 'zod'

const CreateEnvio = z.object({
    almacenero:z.string(),
    name:z.string(),
    amount:z.coerce.number(),
    proveedor:z.string(),
    fecha:z.string(),
    ipv:z.coerce.number(),
    merma:z.coerce.number(),
    p_costo:z.coerce.number(),
    p_venta:z.coerce.number(),
    adicionado:z.string(),
    ctotal:z.coerce.number(),
    producto:z.string()
})

const CreateEnvioForm = CreateEnvio.omit({
numero:true,
id:true,
ipv:true,
merma:true,
p_costo:true,
p_venta:true,
producto:true,
})

export async function crearEnvio(formdata){
    const {almacenero,name,amount,proveedor,fecha,adicionado,ctotal} = CreateEnvioForm.parse({
        almacenero: formdata.get('almacenero'),
        name: formdata.get('name'),
        amount: formdata.get('amount'),
        proveedor: formdata.get('proveedor'),
        fecha: formdata.get('fecha'),
        adicionado:formdata.get('adicionado'),
        ctotal: formdata.get('ctotal'),
    })
    const numero=4;
      await sql`
       INSERT INTO ingresos (almacenero,name,amount,proveedor,fecha,numero,adicionado,ctotal)
       VALUES (${almacenero},${name},${amount},${proveedor},${fecha},${numero},${adicionado},${ctotal})
   `

   revalidatePath('/Recibir_envio')
   redirect('/Recibir_envio')
}



const UpdateIngresos = z.object({
    almacenero:z.string(),
    name:z.string(),
    amount:z.coerce.number(),
    proveedor:z.string(),
    fecha:z.string(),
    adicionado:z.string(),
    ctotal:z.number(),
})

const UpdateIngresosForm = UpdateIngresos.omit({
    numero:true,
    id:true,    
    })

export async function updateEnvio( id , formdata){
    const {almacenero,name,amount,proveedor,fecha} = UpdateIngresosForm.parse({
        almacenero: formdata.get('almacenero'),
        name: formdata.get('name'),
        amount: formdata.get('amount'),
        proveedor: formdata.get('proveedor'),
        fecha: formdata.get('fecha')
    })
 
    const numeros=4;

    try 
    {
    await sql`
    UPDATE ingresos
    SET almacenero = ${almacenero}, amount = ${amount}, name = ${name}, proveedor = ${proveedor}, fecha = ${fecha}, numero = ${numeros} 
    WHERE id = ${id}
  `;
    } catch (error) 
    {
            return { message: 'Database Error: Failed to Update Invoice.' };
    }

   revalidatePath('/Recibir_envio')
   redirect('/Recibir_envio')
}

export async function deleteIngreso(id) {
    await sql`DELETE FROM ingresos WHERE id = ${id}`;
    revalidatePath('/Recibir_envio')
    redirect('/Recibir_envio')
  }


  //Acciones en el Almacen

   





  //Acciones en la Venta
  //Acciones en el IPV
  //Acciones en el Cierre contrable
  //Acciones en las contraseñas
  //Acciones en el estado de cuenta
