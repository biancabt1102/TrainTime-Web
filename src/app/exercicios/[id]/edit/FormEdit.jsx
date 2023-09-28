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

    function converteDia(dia) {
        switch (dia) {
          case "DOMINGO":
            return 0;
          case "SEGUNDA_FEIRA":
            return 1;
          case "TERCA_FEIRA":
            return 2;
          case "QUARTA_FEIRA":
            return 3;
          case "QUINTA_FEIRA":
            return 4;
          case "SEXTA_FEIRA":
            return 5;
          case "SABADO":
            return 6;
          default:
            return dia; // Se não for uma string de dia válida, mantenha o valor original
        }
    }

      function converteCategoria(categoria) {
        switch (categoria) {
          case "NUNCA_FEZ_MUSCULACAO":
            return 0;
          case "TREINAMENTO_DE_FORCA":
            return 1;
          case "CARDIOVASCULAR":
            return 2;
          case "PERDA_DE_PESO":
            return 3;
          case "FLEXIBILIDADE":
            return 4;
          case "TREINAMENTO_FUNCIONAL":
            return 5;
          case "TREINAMENTO_DE_RESISTENCIA":
            return 6;
          case "TREINAMENTO_DE_EQUILIBRIO":
            return 7;
          default:
            return categoria; // Se não for uma string de categoria válida, mantenha o valor original
        }
    }
      

    async function onSubmit() {
        console.log(exercicioEdit.diaDaSemanaId)
        const resp = await update(exercicioEdit);
    
        if (resp?.error) {
          setErro(resp.message);
          return
        }
        push("/exercicios")
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
                label="Dia da semana"
                name="diaDaSemanaId"
                id="diaDaSemanaId"
                options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda" },
                    { value: "2", label: "Terça-Feira" },
                    { value: "3", label: "Quarta-Feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta-feira" },
                    { value: "6", label: "Sábado" }
                ]}
                value={converteDia(exercicioEdit.diaDaSemanaId)} // Converta para string
                onChange={e => handleFieldChange("diaDaSemanaId", e.target.value)}
            />

            <SelectText
                label="Categoria"
                name="categoriaId"
                id="categoriaId"
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
                value={converteCategoria(exercicioEdit.categoriaId)} // Converta para string
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
                <Button type="button" variant="primary">Salvar</Button>
            </div>
            <p className="text-red-500">{erro}</p>
            </form>
        </main>
    );
}
