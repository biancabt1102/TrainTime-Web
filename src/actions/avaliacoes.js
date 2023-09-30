"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/avaliacao";
const getUrl = process.env.NEXT_PUBLIC_BASE_URL + "/exercicios?page=0&size=10";

export async function create(formData) {
    const token = cookies().get("traintime_token");

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }
    
    const resp = await fetch(url, options)
    if (resp.status !== 201) {
        return { message: "Erro ao cadastrar" }
    }
    
    revalidatePath("/exercicios")
    return { message: "ok" }
    
}

export async function getExercicios() {
    const resp = await fetch(getUrl);
    const data = await resp.json();
    return data._embedded.entityModelList;
}

export async function apagar(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if (resp.status !== 204) return {error: "Erro ao apagar avaliação. "}

    revalidatePath("/exercicios")
}

export async function getExercicio(id){
    const getUrl =  url + "/" + id
    const resp = await fetch(getUrl)

    if (resp.status !== 200) return {error: "Erro ao carregar dados"}

    return await resp.json()

}

export async function update(avaliacao){
    const updateUrl =  url + "/" + avaliacao.idExercicio

    const options = {
        method: "PUT",
        body: JSON.stringify(avaliacao),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if (resp.status !== 200) return {error: "Erro ao atualizar conta"}

    revalidatePath("/exercicios")
}