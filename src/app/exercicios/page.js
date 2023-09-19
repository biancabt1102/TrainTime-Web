import NavBar from "@/components/NavBar";
import DataRow from "@/app/exercicios/DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { getExercicios } from "@/actions/avaliacoes";


export default async function Exercicios() {
  const data = await getExercicios();

  return (
    <>
      <NavBar active={"exercicios"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <div className="flex justify-around items-center">
          <h2 className="text-center font-museo font-semibold text-2xl">Lista de exercícios</h2>
          <Button href="/avaliacao"><PlusIcon className="h-8 w-8" /></Button>
        </div>

        <div id="data">
          {data.map(exercicio => <DataRow exercicio={exercicio} />)}
        </div>
      </main>
    </>
  );
}
