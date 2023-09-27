"use server"

import { revalidatePath } from "next/cache";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/avaliacao";

export async function create(formData) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(url, options)
    if (resp.status !== 201) {
        return { message: "Erro ao cadastrar" }
    }
    
    revalidatePath("/contas")
    return { message: "ok" }
    
}

export async function getExercicios() {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/exercicios";
    
    const resp = await fetch(url);
    const data = await resp.json();
    return data._embedded.entityModelList;
}