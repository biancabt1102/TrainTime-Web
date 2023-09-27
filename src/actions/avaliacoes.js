"use server"

import { revalidatePath } from "next/cache";

const postUrl = process.env.NEXT_PUBLIC_BASE_URL + "/avaliacao";
const getUrl = process.env.NEXT_PUBLIC_BASE_URL + "/exercicios?page=0&size=10";

export async function create(formData) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(postUrl, options)
    if (resp.status !== 201) {
        return { message: "Erro ao cadastrar" }
    }
    
    revalidatePath("/contas")
    return { message: "ok" }
    
}

export async function getExercicios() {
    const resp = await fetch(getUrl);
    const data = await resp.json();
    return data._embedded.entityModelList;
}