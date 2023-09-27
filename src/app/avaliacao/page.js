"use client"

import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import { useState } from "react";
import { create } from "@/actions/avaliacoes";
import InputText from "@/components/InputText";
import SelectText from "@/components/SelectText";
import Button from "@/components/Button";

export default function Avaliacao() {
  const data = {
    nomeDoExercicio: "Remada Baixa",
    qtdRepeticoes: 15,
    qtdSeries: 6,
    categoriaId: 0,
    diaDaSemanaId: 0,
    cargaDoExercicio: 30,
    intervaloDoExercicio: 10
  }

  const [erro, setErro] = useState("");

  async function onCreate(formData) {
    const resp = await create(formData);

    if (resp.message === "ok") {
      redirect("/avaliacao")
      return
    }
    setErro(resp.message);
  }

  return (
    <>
      <NavBar active={"avaliacao"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <h2 className="text-center text-emerald-100 text-2xl">Cadastrar exercícios</h2>

        <form action={onCreate} className="p-4">
          <InputText label="Nome do exercício" placeholder="Digite o nome do exercício"
            name="nomeDoExercicio"
            id="nomeDoExercicio"
          />
          <InputText
            label="Repetição" placeholder="Digite o número de repetições" name="qtdRepeticoes"
            id="qtdRepeticoes"
          />
          <InputText
            label="Série" placeholder="Digite o número da série" name="qtdSeries"
            id="qtdSeries"
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
          />
          <InputText label="Carga do exercício" placeholder="Digite o número da carga do exercício (Kg)"
            name="cargaDoExercicio"
            id="cargaDoExercicio"
          />
          <InputText label="Intervalo" placeholder="Digite o intervalo do exerício (segundos)"
            name="intervaloDoExercicio"
            id="intervaloDoExercicio"
          />

          <div className="flex justify-around mt-5">
            <Button href="/exercicios" variant="secundary">Cancelar</Button>
            <Button type="button" variant="primary">Cadastrar</Button>
          </div>
          <p className="text-red-500">{erro}</p>
        </form>
      </main>
    </>
  );
}
