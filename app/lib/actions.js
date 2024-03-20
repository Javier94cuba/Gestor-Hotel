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
})

const CreateEnvioForm = CreateEnvio.omit({
numero:true,
id:true,    
})

export async function crearEnvio(formdata){
    const {almacenero,name,amount,proveedor,fecha} = CreateEnvioForm.parse({
        almacenero: formdata.get('almacenero'),
        name: formdata.get('name'),
        amount: formdata.get('amount'),
        proveedor: formdata.get('proveedor'),
        fecha: formdata.get('fecha')
    })
    const numero=4;

      await sql`
       INSERT INTO ingresos (almacenero,name,amount,proveedor,fecha,numero)
       VALUES (${almacenero},${name},${amount},${proveedor},${fecha},${numero})
   `

   revalidatePath('/Recibir_envio')
   redirect('/Recibir_envio')
}