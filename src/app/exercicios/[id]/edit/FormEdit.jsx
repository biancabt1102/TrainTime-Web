"use client"

import { update } from "@/actions/avaliacoes";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import SelectText from "@/components/SelectText";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function FormExercicioEdit({exercicio}){
    const [erro, setErro] = useState("");
    const [exercicioEdit, setExercicioEdit] = useState(exercicio);
    const { push } = useRouter();

    function handleFieldChange(field, value){
        setExercicioEdit({
            ...exercicioEdit,
            [field]:value
        })
    }

    async function onSubmit() {
        const resp = await update(exercicioEdit);
    
        if (resp?.error) {
          setErro(resp.message);
          return
        }
        push("/avaliacao")
    }

    return(
        <main className="bg-emerald-900 m-12 p-4 rounded">
            <h2 className="text-center text-emerald-100 text-2xl">Editar exercícios</h2>

            <form action={onSubmit} className="p-4">
            <InputText 
                label="Nome do exercício" 
                placeholder="Digite o nome do exercício"
                name="nomeDoExercicio"
                id="nomeDoExercicio"
                value={exercicioEdit.nomeDoExercicio}
                onChange={e => handleFieldChange("nomeDoExercicio", e.target.value)}
            />
            <InputText
                label="Repetição" placeholder="Digite o número de repetições" name="qtdRepeticoes"
                id="qtdRepeticoes"
                value={exercicioEdit.qtdRepeticoes}
                onChange={e => handleFieldChange("qtdRepeticoes", e.target.value)}
            />
            <InputText
                label="Série" placeholder="Digite o número da série" name="qtdSeries"
                id="qtdSeries"
                value={exercicioEdit.qtdSeries}
                onChange={e => handleFieldChange("qtdSeries", e.target.value)}
            />
            <SelectText
                label="Dia da semana" name="diaDaSemanaId" id="diaDaSemanaId"
                options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda" },
                { value: "2", label: "Terça-Feira" },
                { value: "3", label: "Quarta-Feira" },
                { value: "4", label: "Quinta-feira" },
                { value: "5", label: "Sexta-feira" },
                { value: "6", label: "Sábado" }
                ]}
                value={exercicioEdit.diaDaSemanaId}
                onChange={e => handleFieldChange("diaDaSemanaId", e.target.value)}
            />
            <SelectText
                label="Categoria" name="categoriaId" id="categoriaId"
                options={[
                { value: "0", label: "Nunca fez musculação" },
                { value: "1", label: "Treinamento de força" },
                { value: "2", label: "Cardiovascular" },
                { value: "3", label: "Perda de peso" },
                { value: "4", label: "Flexibilidade" },
                { value: "5", label: "Treinamento funcional" },
                { value: "6", label: "Treinamento de resistência" },
                { value: "7", label: "Treinamento de equilibrio" },
                ]}
                value={exercicioEdit.categoriaId}
                onChange={e => handleFieldChange("categoriaId", e.target.value)}
            />
            <InputText label="Carga do exercício" placeholder="Digite o número da carga do exercício (Kg)"
                name="cargaDoExercicio"
                id="cargaDoExercicio"
                value={exercicioEdit.cargaDoExercicio}
                onChange={e => handleFieldChange("cargaDoExercicio", e.target.value)}
            />
            <InputText label="Intervalo" placeholder="Digite o intervalo do exerício (segundos)"
                name="intervaloDoExercicio"
                id="intervaloDoExercicio"
                value={exercicioEdit.intervaloDoExercicio}
                onChange={e => handleFieldChange("intervaloDoExercicio", e.target.value)}
            />

            <div className="flex justify-around mt-5">
                <Button href="/exercicios" variant="secundary">Cancelar</Button>
                <Button type="button" variant="primary">Cadastrar</Button>
            </div>
            <p className="text-red-500">{erro}</p>
            </form>
        </main>
    );
}
