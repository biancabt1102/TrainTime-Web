"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/toast";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@/components/Button";
import InputTextLogin from "@/components/InputTextLogin";

export default function LoginPage() {
    const { register, handleSubmit } = useForm();
    const { push } = useRouter();
    const { error } = useToast();
    const { login } = useContext(AuthContext);

    async function onSubmit(data) {
        const resp = await login(data);

        console.log(resp);

        if (resp?.error) {
            error(resp.error);
            return
        }
        push("/");
    }

    return (
        <div className="flex h-screen">

            <main className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold mb-5 font-grad">TrainTime</h1>
                <p className="font-museo text-base text-center mb-3">Seja bem-vindo aqui faça o seu login para aproveitar os nossos benefícios.</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <InputTextLogin
                        register={register}
                        name="email"
                        label="Email"
                        placeholder="Digite o seu email"
                    />
                    <InputTextLogin
                        register={register}
                        name="senha"
                        label="Senha"
                        type="password"
                        placeholder="************"
                    />
                    <Button type="button" variant="third">Login</Button>
                </form>

            </main>
        </div>
    );
}