"use server"
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login";

export async function serverLogin(credenciais) {
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options);

    if (resp.status !== 200) return { error: "Credenciais inválidas" }

    const json = await resp.json();

    cookies().set("traintime_token", json.token, {
        maxAge: 60 * 60 * 24 * 7
    })
}

export async function serverLogout() {
    cookies().delete("traintime_token");
}
